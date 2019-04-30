# GraphQL

- It's a query language developed by facebook
- Similar to SQL queries
- Typed
- Client specified queries

## Schemas

```
type Author {
  id: ID!
  info: Person
}

type Person {
  name: String!
  age: Int
  gender: String
}
```

GraphQL Types:
- Float
- Integer
- String
- Boolean
- ID

## Interfaces

Abstract types for be implemented by other types

```
interface Shared {
  id: ID!
  name: String
}

type Dog implements Shared {
  did!
  name: String
  breed: String
}

type Person implements Shared {
  id: ID!
  name: String!
  height: Int
  age: Int
}
```

## Resolvers

Are funcions for provide business logic.

> fieldName(obj, args, context, info) { result }

- fieldname: Name of the resolver function which should match the field in the schema
- obj: Contains the result returned by the parent field
- args: Holds the arguments passed into the query
- context: Holds the pre-request state like authentication information that should be considered while resolving the query
- info: Contains information about the execution state of the query and should only be used in advanced cases

