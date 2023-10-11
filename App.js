import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import SearchForm from './src/components/SearchForm';
import FlightOptionItem from './src/components/FlightOptionItem';
import dummyData from './data.json';
import { useState } from 'react';
import { searchFlights } from './src/services/api';

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = async (data) => {
    setLoading(true);
    setItems([]);

    // get items form the backend
    const response = await searchFlights(data);
    console.log("🚀 ~ file: App.js:26 ~ onSearch ~ data:", data)

    setItems(response.data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />

        {loading && (
          <View>
            <ActivityIndicator />
            <Text>Searching for the best prices...</Text>
          </View>
        )}

        <FlatList
          data={items}
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});