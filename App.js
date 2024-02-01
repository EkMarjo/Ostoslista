import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
const [messages, setMessages] = useState ([]);

  const handleAdd = () => {
    setMessages([...messages,message]);
    setMessage('');
  }
  const handleClear = () => {
    setMessages([]);
  }

  
  return (
<View style={styles.container}>
      <View style={{felx: 1}}>
      <TextInput 
      placeholder='Syötä teksti'
      onChangeText={text => setMessage(text)}
      value={message}
      />
     </View>
     <View style= {styles.fixToText}>
      <Button title ="Add" onPress= {handleAdd}/>
      <Button title ="Clear" onPress= {handleClear}/>
      </View>
      <View style = {{ flex: 8}}>
      <Text style={styles.headerText}>Shopping List</Text>
      <FlatList
      data={messages}
      renderItem={({item})=> 
      <View style={styles.listItem}>
        
      <Text>{item}</Text>
      </View>
    }
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }

});
