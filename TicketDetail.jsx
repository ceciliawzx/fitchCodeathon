import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FloatingButton } from './util';

const fakeTicketList = [
  {
    name: 'ticket1',
    price: 100,
    description: 'this is ticket1',
  },
  {
    name: 'ticket2',
    price: 300,
    description: 'this is ticket2',
  },
];

const TicketSection = ({ ticket, totalPrice, setTotalPrice }) => {
  const price = ticket.price;
  const [ticketQuantity, setTicketQuantity] = useState(0);
  return (
    <View style={styles.ticketBlock}>
      <Text>{ticket.name}</Text>
      <Text>Price: ${price}</Text>
      <View style={styles.quantityInput}>
        {/* Minus button */}
        <TouchableOpacity
          onPress={() => {
            if (ticketQuantity > 0) {
              setTicketQuantity(ticketQuantity - 1);
              setTotalPrice(totalPrice - price);
            }
          }}
        >
          <Text
            style={
                [styles.button,
                ticketQuantity > 0
                    ? styles.biOpButton
                    : styles.disabledMinusButton
            ]}
          >
            -
          </Text>
        </TouchableOpacity>

        {/* TicketQuantity */}
        <Text>{ticketQuantity}</Text>

        {/* Add button */}
        <TouchableOpacity
          onPress={() => {
            setTicketQuantity(ticketQuantity + 1);
            setTotalPrice(totalPrice + price);
          }}
        >
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export function TicketDetailPage() {
  const route = useRoute();
  const { event } = route.params;

  const [totalPrice, setTotalPrice] = useState(0);

  const handlePayWithPayPal = () => {
    // Implement PayPal integration here
    // This function will be called when the "Pay with PayPal" button is pressed
    // You can use PayPal SDK or a web view for the payment process
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Event detail */}
      <View style={styles.eventDetails}>
        <Text>{event.name}</Text>
        <Text>{event.date}</Text>
        <Text>{event.location}</Text>
      </View>
      {fakeTicketList.map((ticket, index) => (
        <TicketSection
          ticket={ticket}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      ))}

      <Text>Total Amount: ${totalPrice}</Text>
      <FloatingButton
        text='Pay with PayPal'
        handleClick={handlePayWithPayPal}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventDetails: {
    marginBottom: 20,
  },
  ticketList: {
    marginBottom: 20,
  },
  ticketBlock: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 10,
    height: 400,
    width: 200,
  },
  quantityInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    width: 40,
    height: 40,
    borderRadius: 10,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  biOpButton: {
    backgroundColor: 'blue',
  },
  disabledMinusButton: {
    backgroundColor: 'grey',
  },
});
