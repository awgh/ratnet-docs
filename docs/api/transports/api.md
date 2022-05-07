---
sidebar_position: 2
---

# Transport Interface

To create a new transport, the Transport interface must be implemented.  This is the only interface required for a new Transport.

In this section, we'll go through each of the functions in the Transport interface.

```go "
type Transport interface {
	Listen(listen string, adminMode bool)
	Name() string
	RPC(host string, method Action, args ...interface{}) (interface{}, error)
	Stop()

	ByteLimit() int64 
	SetByteLimit(limit int64)

	JSON
}

type JSON interface {
    // MarshalJSON : Serialize this type to JSON
    MarshalJSON() (b []byte, e error)
}
```

## Listen
```go "
	Listen(listen string, adminMode bool)
```

Listen is expected to start the message listening loop as a goroutine and then return.  If the message listening loop is already running, Listen should just exit.

When a message is received from a remote client, the message listening loop should convert that message from bytes into an api.RemoteCall struct (perhaps using api.RemoteCallFromBytes) and then pass that RemoteCall into either the AdminRPC or PublicRPC functions of the ratnet node this transport instance is attached to.

When the RemoteCall is run on the node, the message listening loop should take the response and serialize it into an api.RemoteResponse struct (perhaps using api.RemoteResponseToBytes) and return that to the client.  If your transport does not support bi-directional communication, you can skip sending these RemoteResponses.

Listen takes two arguments:
1. listen (string)

    Opaque argument passed to an instance of the transport when it starts listening.  In the case of network protocols, this is frequently a host:port listen string (ie. ":443").  For transports that might use non-IP radios or networking, this could be a capcode or a frequency or a sound card or a serial port, etc.

2. adminMode (bool) 

    This flag determines whether this transport is currently being used to access the administrative backend API of ratnet, rather than the public API.  Should default to false, true is insecure on a public bus!  Transport implementations will only use this flag to determine how they call into the ratnet node, as shown here:

    ```go reference
	https://github.com/awgh/ratnet/blob/master/transports/tls/tls.go#L130-L135
	```
	

## Name
```go "
    Name() string
```

Name must return a unique string identifier for this transport.  The UDP transport returns "udp", TCP returns "tcp" and so on.  This string will be used in the peer table in URI schemas, such as "udp://host:port", so they should be short, descriptive, and human-readable.

## RPC
```go "
	RPC(host string, method Action, args ...interface{}) (interface{}, error)
```
## Stop
```go
    Stop()
```

Stop will halt any background listening loops and clean up any resources allocated or held by this transport instance.  


## ByteLimit / SetByteLimit
```go
	ByteLimit() int64 
	SetByteLimit(limit int64)
```

The ByteLimit field of a transport sets the maximum size for a message bundle.  Individual messages that are too large to fit in a single bundle will be automatically chunked into smaller messages, with the chunk size set to the smallest ByteLimit of this instance's transports.

Transport implementations can chose to ignore SetByteLimit calls if their transport has a fixed ByteLimit.

If you're wondering what SetByteLimit is even used for... it's currently useful for things with fixed timeouts where you might want to dynamically adjust the MTU, like UDP and unit tests.  


## MarshallJSON
```go
MarshalJSON() (b []byte, e error)
```

