/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSignUps = /* GraphQL */ `
  mutation CreateSignUps(
    $input: CreateSignUpsInput!
    $condition: ModelSignUpsConditionInput
  ) {
    createSignUps(input: $input, condition: $condition) {
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
export const updateSignUps = /* GraphQL */ `
  mutation UpdateSignUps(
    $input: UpdateSignUpsInput!
    $condition: ModelSignUpsConditionInput
  ) {
    updateSignUps(input: $input, condition: $condition) {
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
export const deleteSignUps = /* GraphQL */ `
  mutation DeleteSignUps(
    $input: DeleteSignUpsInput!
    $condition: ModelSignUpsConditionInput
  ) {
    deleteSignUps(input: $input, condition: $condition) {
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
export const createTickets = /* GraphQL */ `
  mutation CreateTickets(
    $input: CreateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    createTickets(input: $input, condition: $condition) {
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
export const updateTickets = /* GraphQL */ `
  mutation UpdateTickets(
    $input: UpdateTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    updateTickets(input: $input, condition: $condition) {
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
export const deleteTickets = /* GraphQL */ `
  mutation DeleteTickets(
    $input: DeleteTicketsInput!
    $condition: ModelTicketsConditionInput
  ) {
    deleteTickets(input: $input, condition: $condition) {
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
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
