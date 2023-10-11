import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';

export default function SearchForm({ onSearch }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDepartDatePicker, setShowDepartDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const onSearchPress = () => {
    onSearch({ from, to, departDate, returnDate });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Search the best prices for your next trip
      </Text>

      <TextInput
        value={from}
        onChangeText={setFrom}
        placeholder="From"
        style={styles.input}
      />

      <TextInput
        value={to}
        onChangeText={setTo}
        placeholder="To"
        style={styles.input}
      />

      <TouchableOpacity onPress={() => setShowDepartDatePicker(true)}>
        <View style={styles.datePicker}>
          <Feather name="calendar" size={26} color="gray" />
          <Text>{departDate.toDateString()}</Text>
        </View>
      </TouchableOpacity>

      {showDepartDatePicker && (
        <DateTimePicker
          value={departDate}
          onChange={(event, date) => {
            setShowDepartDatePicker(false); // Close the date picker
            setDepartDate(date || new Date());
          }}
          minimumDate={new Date()}
        />
      )}

      <TouchableOpacity onPress={() => setShowReturnDatePicker(true)}>
        <View style={styles.datePicker}>
          <Feather name="calendar" size={26} color="gray" />
          <Text>{returnDate.toDateString()}</Text>
        </View>
      </TouchableOpacity>

      {showReturnDatePicker && (
        <DateTimePicker
          value={returnDate}
          onChange={(event, date) => {
            setShowReturnDatePicker(false); // Close the date picker
            setReturnDate(date || new Date());
          }}
          minimumDate={departDate}
        />
      )}

      <Button title="Search" onPress={onSearchPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,

    // Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  title: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },

  datePicker: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,

    flexDirection: 'row',
    alignItems: 'center',
  },
});