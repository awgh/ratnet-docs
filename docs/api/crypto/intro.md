---
sidebar_position: 1
---

# Crypto in Ratnet

Cryptography, like everything else in Ratnet, is totally modular behind a relatively simple interface.  Multiple different Ratnet cryptosystems have been implemented already, and it's easy to write your own.

One running Ratnet node uses two instances of a cryptosystem module: one for the encryption of bundles of messages (the "routing key") and another for the encryption of individual messages (the "content key").  It's important to note that these two instances can be totally different crytosystems.

A node's routing cryptosystem must match the routing cryptosystem of the nodes it routes messages through.

A node's content cryptosystem must match the content cryptosystem of the users it exchanges messages with.

There are several implications of this, one being that it is possible for nodes with a custom content cryptosystem to route messages through any Ratnet node with a common routing cryptosystem. 
