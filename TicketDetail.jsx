import React, { useState } from 'react';
import { format } from "date-fns";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FloatingButton } from './util';
// import { ScrollView } from '@react-native-gesture-handler';
// import { ScrollView } from 'react-native';

const timeformat = "dd-MM-yyyy    HH:mma"

const TicketSection = ({ ticket, totalPrice, setTotalPrice }) => {
  const price = ticket.price;
  const [ticketQuantity, setTicketQuantity] = useState(0);
  return (
    <View style={styles.ticketBlock}>
      {/* TicketName and Price Display */}
      <View style={styles.ticketNamePrice}>
        <Text style={styles.ticketListText}>{ticket.name}</Text>
        <Text style={styles.ticketListText}>Price: {price} {ticketList[0].currency}</Text>
      </View>

      {/* Quantity Display */}
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
            style={[
              styles.button,
              ticketQuantity > 0
                ? styles.biOpButton
                : styles.disabledMinusButton,
            ]}
          >
            -
          </Text>
        </TouchableOpacity>

        {/* TicketQuantity */}
        <View style={styles.quantityContainer}>
          <Text>{ticketQuantity}</Text>
        </View>

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

  {/* Create Ticket List */}
  ticketList = [
    {
      name: event.acf.ticket.ticket_name,
      price: event.acf.ticket.price,
      currency: event.acf.ticket.currency,
    }
  ];

  // if have another ticket, add it
  if (event.acf.ticket_2.ticket_name_2 != "" && event.acf.ticket_2.price_2 != "" && event.acf.ticket_2.currency_2 != "") {
    ticketList.push({
      name: event.acf.ticket_2.ticket_name_2,
      price: event.acf.ticket_2.price_2,
      currency: event.acf.ticket_2.currency_2,
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Event detail */}
      <View style={styles.eventDetails}>
        <Text style={styles.eventTextDetailsTitle}>{event.acf.name}</Text>
        <Text style={styles.eventTextDetails}>{format (new Date(event.acf.starttime), timeformat)}</Text>
        <Text style={styles.eventTextDetails}>{format (new Date(event.acf.endtime), timeformat)}</Text>
        <Text style={styles.eventTextDetails}>{event.acf.location}</Text>
      </View>

      {ticketList.map((ticket, index) => (
        <TicketSection
          ticket={ticket}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      ))}

      <Text>Total Amount: {totalPrice} {ticketList[0].currency}</Text>
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
    justifyContent: 'flex-start',
  },
  quantityContainer: {
    // alignItems: 'center',
  },
  eventDetails: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  eventTextDetailsTitle: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eventTextDetails: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 50,
  },
  ticketList: {
    marginBottom: 20,
  },
  ticketNamePrice: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ticketListText: {
    fontSize: 20,
    marginBottom: 20,
    textAlignVertical: 'center',
  },
  ticketBlock: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    marginBottom: 20,
    height: 150,
    width: 300,
    backgroundColor: '#fff', // Set a background color for the shadow to be visible
    borderRadius: 9, // Optional: if you want rounded corners
    shadowOpacity: 0.1, // Shadow visibility
    shadowRadius: 5, // How blurred the shadow should be
    shadowColor: '#000', // Shadow color
    shadowOffset: { height: 3, width: 0 }, // Shadow position
    elevation: 3, // Elevation for Android
    marginTop: 20,
    marginLeft: 10, // Optional: if you want some space from the left edge of the screen
    marginRight: 10, // Optional: if you want some space from the right edge of the screen
  },
  quantityInput: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'right',
    justifyContent: 'space-between',
    width: '50%',
    marginLeft: '50%',
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
