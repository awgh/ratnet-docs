---
sidebar_position: 2
---

# Node Interface

To create a new Node, the Node interface must be implemented.  This is the only interface required for a new Node.

In this section, we'll go through each of the functions in the Node interface.

```go "
type Node interface {

	// Local Access Only (Not Exposed Through RPC API)
	Start() error
	Stop()
	GetPolicies() []Policy
	SetPolicy(policies ...Policy)
	Router() Router
	SetRouter(router Router)
	GetChannelPrivKey(name string) (string, error)
	Handle(msg Msg) (bool, error)
	Forward(msg Msg) error
	IsRunning() bool

	// Chunking
	// AddStream - inform node of receipt of a stream header
	AddStream(streamID uint32, totalChunks uint32, channelName string) error
	// AddChunk - inform node of receipt of a chunk
	AddChunk(streamID uint32, chunkNum uint32, data []byte) error

	// FlushOutbox : Empties the outbox of messages older than maxAgeSeconds
	FlushOutbox(maxAgeSeconds int64)

	// RPC Entrypoints

	// AdminRPC :
	AdminRPC(transport Transport, call RemoteCall) (interface{}, error)

	// PublicRPC :
	PublicRPC(transport Transport, call RemoteCall) (interface{}, error)

	// PUBLIC API
	// Functions that are safe for non-authenticated calls / open Internet

	// ID : get the routing public key (1)
	ID() (bc.PubKey, error)

	// Dropoff : Deliver a batch of messages to this node (2)
	Dropoff(bundle Bundle) error

	// Pickup : Get outgoing messages from this node (3)
	Pickup(routingPub bc.PubKey, lastTime int64, maxBytes int64, channelNames ...string) (Bundle, error)

	//

	// Admin API Functions
	// Functions that are NOT SAFE for non-authenticated access from the Internet

	// CID : Return content key (16)
	CID() (bc.PubKey, error)

	// GetContact : Return a contact by name (17)
	GetContact(name string) (*Contact, error)
	// GetContacts : Return a list of contacts (18)
	GetContacts() ([]Contact, error)
	// AddContact : Add or Update a contact key (19)
	AddContact(name string, key string) error
	// DeleteContact : Remove a contact (20)
	DeleteContact(name string) error

	// GetChannel : Return a channel by name (21)
	GetChannel(name string) (*Channel, error)
	// GetChannels : Return list of channels known to this node (22)
	GetChannels() ([]Channel, error)
	// AddChannel : Add a channel to this node's database (23)
	AddChannel(name string, privkey string) error
	// DeleteChannel : Remove a channel from this node's database (24)
	DeleteChannel(name string) error

	// GetProfile : Retrieve a Profile by name (25)
	GetProfile(name string) (*Profile, error)
	// GetProfiles : Retrieve the list of profiles for this node (26)
	GetProfiles() ([]Profile, error)
	// AddProfile : Add or Update a profile to this node's database (27)
	AddProfile(name string, enabled bool) error
	// DeleteProfile : Remove a profile from this node's database (28)
	DeleteProfile(name string) error
	// LoadProfile : Load a profile key from the database as the content key (29)
	LoadProfile(name string) (bc.PubKey, error)

	// GetPeer : Retrieve a peer by name (30)
	GetPeer(name string) (*Peer, error)
	// GetPeers : Retrieve this node's list of peers (31)
	GetPeers(group ...string) ([]Peer, error)
	// AddPeer : Add or Update a peer configuration (32)
	AddPeer(name string, enabled bool, uri string, group ...string) error
	// DeletePeer : Remove a peer from this node's database (33)
	DeletePeer(name string) error

	// Send : Transmit a message to a single key (34) <deprecated>
	Send(contactName string, data []byte, pubkey ...bc.PubKey) error
	// SendChannel : Transmit a message to a channel (35) <deprecated>
	SendChannel(channelName string, data []byte, pubkey ...bc.PubKey) error

	// SendMsg : Transmit a message object (36)
	SendMsg(msg Msg) error

	//  End of Admin API Functions

	//

	// Channels
	// In : Returns the In channel of this node
	In() chan Msg
	// Out : Returns the Out channel of this node
	Out() chan Msg
	// Events : Returns the Err channel of this node
	Events() chan Event

	ImportExport
}

type ImportExport interface {
	// Import node from JSON
	Import(jsonConfig []byte) error
	// Export node to JSON
	Export() ([]byte, error)
}
```

## RunPolicy
```go "
	RunPolicy() error
```

Start running this policy.
	

## Stop
```go "
    Stop()
```

Stop running this policy.

## GetTransport
```go "
	GetTransport() Transport
```

Returns the Transport associated with this policy.

## MarshallJSON
```go
MarshalJSON() (b []byte, e error)
```

Serialize this type to JSON.
