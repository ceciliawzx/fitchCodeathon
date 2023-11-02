import React from 'react';

export type Event = {
    id: number;
    datetime: string;
    image?: string;
    location: string;
    name: string;
    tickes: Ticket[];
  }
  
  export type Ticket = {
    type: number;
    price: number;
    currrency: string;
  }