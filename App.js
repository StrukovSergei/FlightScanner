import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import SearchForm from './src/components/SearchForm';
import FlightOptionItem from './src/components/FlightOptionItem';

import data from './data.json'

export default function App() {

  const onSearch = async (data) => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchForm />
        <FlatList
          data={data}
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
