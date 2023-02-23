import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Card from './src/components/card';
import {cards} from './src/constants/mocked-cards';
import {styles} from './styles';
import Header from './src/components/header';

const App = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState(cards(15));
  const [appState, setAppState] = useState('');

  const emptyList = <Text style={styles.empty}>No hay tasks</Text>;

  const descriptionInputRef = useRef<TextInput>(null);

  const isAndroid = Platform.OS === 'android';

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (AppState.currentState === 'active') {
        setData(cards(15));
      }
      setAppState(nextAppState);
    };
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, [appState]);

  const handleOnPress = () => {
    setData([
      ...data,
      {title: title, description: description, isCompleted: false},
    ]);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.mainSection}>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Card
              title={item.title}
              description={item.description}
              isCompleted={item.isCompleted}
            />
          )}
          ListHeaderComponent={Header('TASK LIST')}
          ListEmptyComponent={emptyList}
        />
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Título"
              placeholderTextColor={isAndroid ? '#230443' : '#ffffff'}
              value={title}
              onChangeText={setTitle}
              returnKeyType="next"
              onSubmitEditing={() => {
                descriptionInputRef.current?.focus();
              }}
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Descripción"
              placeholderTextColor={isAndroid ? '#230443' : '#ffffff'}
              value={description}
              onChangeText={setDescription}
              ref={descriptionInputRef}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
            />
            <TouchableOpacity style={styles.button} onPress={handleOnPress}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default App;
