---
sidebar_position: 2
---

# Connection Policy Interface

To create a new Connection Policy, the Policy interface must be implemented.  This is the only interface required for a new Connection Policy.

In this section, we'll go through each of the functions in the Policy interface.

```go "
type Policy interface {
	RunPolicy() error
	Stop()
	GetTransport() Transport

	JSON
}

type JSON interface {
    MarshalJSON() (b []byte, e error)
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
