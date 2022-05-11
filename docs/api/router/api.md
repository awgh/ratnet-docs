---
sidebar_position: 2
---

# Router Interface

To create a new router, the Router interface must be implemented.  This is the only interface required for a new Router.

In this section, we'll go through each of the functions in the Router interface.

```go "
type Router interface {
	Route(node Node, msg []byte) error
	Patch(patch Patch)
	GetPatches() []Patch

	JSON
}

type JSON interface {
    // MarshalJSON : Serialize this type to JSON
    MarshalJSON() (b []byte, e error)
}
```

## Route
```go "
	Route(node Node, msg []byte) error
```

Determine what to do with the given message, and then have the node do it.
	

## Patch
```go "
    Patch(patch Patch)
```

Add a mapping from an incoming channel to one or more destination channels.

## GetPatches
```go "
	GetPatches() []Patch
```

Returns an array with the mappings of incoming channels to destination channels.

## MarshallJSON
```go
MarshalJSON() (b []byte, e error)
```

Serialize this type to JSON.