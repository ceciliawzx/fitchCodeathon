/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSignUps = /* GraphQL */ `
  subscription OnCreateSignUps($filter: ModelSubscriptionSignUpsFilterInput) {
    onCreateSignUps(filter: $filter) {
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
export const onUpdateSignUps = /* GraphQL */ `
  subscription OnUpdateSignUps($filter: ModelSubscriptionSignUpsFilterInput) {
    onUpdateSignUps(filter: $filter) {
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
export const onDeleteSignUps = /* GraphQL */ `
  subscription OnDeleteSignUps($filter: ModelSubscriptionSignUpsFilterInput) {
    onDeleteSignUps(filter: $filter) {
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
export const onCreateTickets = /* GraphQL */ `
  subscription OnCreateTickets($filter: ModelSubscriptionTicketsFilterInput) {
    onCreateTickets(filter: $filter) {
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
export const onUpdateTickets = /* GraphQL */ `
  subscription OnUpdateTickets($filter: ModelSubscriptionTicketsFilterInput) {
    onUpdateTickets(filter: $filter) {
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
export const onDeleteTickets = /* GraphQL */ `
  subscription OnDeleteTickets($filter: ModelSubscriptionTicketsFilterInput) {
    onDeleteTickets(filter: $filter) {
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
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onCreateEvents(filter: $filter) {
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($filter: ModelSubscriptionEventsFilterInput) {
    onUpdateEvents(filter: $filter) {
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($filter: ModelSubscriptionEventsFilterInput) {
    onDeleteEvents(filter: $filter) {
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
