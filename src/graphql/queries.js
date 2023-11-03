/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSignUps = /* GraphQL */ `
  query GetSignUps($id: ID!) {
    getSignUps(id: $id) {
      id
      Events {
        id
        name
        dateTime
        locationPlusCode
        createdAt
        updatedAt
        __typename
      }
      Tickets {
        id
        amount
        type
        price
        eventsID
        createdAt
        updatedAt
        __typename
      }
      name
      Email
      Phone
      Paid
      createdAt
      updatedAt
      signUpsEventsId
      signUpsTicketsId
      __typename
    }
  }
`;
export const listSignUps = /* GraphQL */ `
  query ListSignUps(
    $filter: ModelSignUpsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Email
        Phone
        Paid
        createdAt
        updatedAt
        signUpsEventsId
        signUpsTicketsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTickets = /* GraphQL */ `
  query GetTickets($id: ID!) {
    getTickets(id: $id) {
      id
      amount
      type
      price
      eventsID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTickets = /* GraphQL */ `
  query ListTickets(
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        type
        price
        eventsID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      id
      name
      dateTime
      locationPlusCode
      Tickets {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        dateTime
        locationPlusCode
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ticketsByEventsID = /* GraphQL */ `
  query TicketsByEventsID(
    $eventsID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketsByEventsID(
      eventsID: $eventsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        type
        price
        eventsID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
