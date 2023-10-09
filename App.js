import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SearchForm from './src/components/SearchForm';

export default function App() {

  const onSearch = async (data) => {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />
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
