import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FloatingButton } from './util';

const fakeTicketList = [
  {
    name: "ticket1",
    price: 100,
    description: 'this is ticket1',
  },
  {
    name: "ticket2",
    price: 300,
    description: 'this is ticket2',
  },
]


const TicketSection = ({ticket, totalPrice, setTotalPrice}) => {

  const price = ticket.price;
  const [ticketQuantity, setTicketQuantity] = useState(0);
  return (
    <View style={styles.ticketBlock}>
      <Text>{ticket.name}</Text>
      <Text>Price: ${price}</Text>
      <View style={styles.quantityInput}>
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
              ticketQuantity > 0
                ? styles.minusButton
                : styles.disabledMinusButton
            }
          >
            -
          </Text>
        </TouchableOpacity>
        <TextInput value={ticketQuantity.toString()} />
        <TouchableOpacity
          onPress={() => {
            setTicketQuantity(ticketQuantity + 1);
            setTotalPrice(totalPrice + price);
          }}
        >
          <Text style={styles.plusButton}>+</Text>
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
    <View style={styles.container}>
      {fakeTicketList.map((ticket, index) => (
          <TicketSection ticket={ticket} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      ))}
      

      {/* <View style={styles.eventDetails}>
        <Text>{event.name}</Text>
        <Text>{event.date}</Text>
        <Text>{event.location}</Text>
      </View>

      <View style={styles.ticketList}>
        <View style={styles.ticketBlock}>
          <Text>Ticket Type 2</Text>
          <Text>Price: ${ticket2Price}</Text>
          <View style={styles.quantityInput}>
            <TouchableOpacity
              onPress={() => {
                if (ticket2Quantity > 0) {
                  setTicket2Quantity(ticket2Quantity - 1);
                }
              }}
            >
              <Text
                style={
                  ticket2Quantity > 0
                    ? styles.minusButton
                    : styles.disabledMinusButton
                }
              >
                -
              </Text>
            </TouchableOpacity>
            <TextInput value={ticket2Quantity.toString()} />
            <TouchableOpacity
              onPress={() => setTicket2Quantity(ticket2Quantity + 1)}
            >
              <Text style={styles.plusButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}

        {/* <View style={styles.ticketList}>
                {ticketTypes.map((ticket, index) => (
                    <View style={styles.ticketBlock} key={index}>
                        <Text>{ticket.name}</Text>
                        <Text>Price: ${ticket.price}</Text>
                        <Text>Description: {ticket.description}</Text>
                        <View style={styles.quantityInput}>
                            <TouchableOpacity
                                style={styles.plusButton}
                                onPress={() => {
                                    const updatedQuantities = [...ticketQuantities];
                                    updatedQuantities[index] += 1;
                                    setTicketQuantities(updatedQuantities);
                                }}
                            >
                                <Text>+</Text>
                            </TouchableOpacity>
                            <TextInput value={ticketQuantities[index].toString()} />
                            <TouchableOpacity
                                style={ticketQuantities[index] > 0 ? styles.minusButton : styles.disabledMinusButton}
                                onPress={() => {
                                    if (ticketQuantities[index] > 0) {
                                        const updatedQuantities = [...ticketQuantities];
                                        updatedQuantities[index] -= 1;
                                        setTicketQuantities(updatedQuantities);
                                    }
                                }}
                            >
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View> */}

      <Text>Total Amount: ${totalPrice}</Text>
      <FloatingButton
        text='Pay with PayPal'
        handleClick={handlePayWithPayPal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  quantityInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  minusButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  disabledMinusButton: {
    backgroundColor: 'grey',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
