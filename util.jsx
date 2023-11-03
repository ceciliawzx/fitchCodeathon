import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';


export const FloatingButton = ( {text, handleClick, disabled} ) => {
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: disabled ? 'gray' : '#17A54D', // Change border color when disabled
          alignItems: 'center',
          justifyContent: 'center',
          width: 300,
          position: 'absolute',
          bottom: 20, // Distance from the bottom
          left: '50%', // Set to 50% of the container width
          transform: [{ translateX: -150 }], // Translate back by half the width of the button
          height: 50,
          backgroundColor: disabled ? 'gray' : '#17A54D', // Change border color when disabled
          borderRadius: 35, // Since width and height are 100 and 70, this will not make a perfect circle. Adjust as needed.
        }}
        onPress={() => {
          handleClick();
        }}
        disabled={disabled}
      >
        <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };