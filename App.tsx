import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Card from './src/components/card';
import {cards} from './src/constants/mocked-cards';
import Header from './src/components/header';
import RNBootSplash from 'react-native-bootsplash';
import {CheckIcon} from './src/assets/icons';
import {
  FormContainer,
  ListContainer,
  MainButton,
  MainInputs,
  Wrapper,
} from './styles';
import EmptyList from './src/components/empty-text';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './src/constants/theme';

const App = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState(cards(15));
  const [appState, setAppState] = useState('');

  const descriptionInputRef = useRef<TextInput>(null);

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

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
    <ThemeProvider theme={myTheme}>
      <Wrapper>
        <ListContainer>
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
            ListEmptyComponent={EmptyList}
          />
        </ListContainer>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView>
            <FormContainer>
              <MainInputs
                placeholder="Título"
                placeholderTextColor={myTheme.colors.primary}
                value={title}
                onChangeText={setTitle}
                returnKeyType="next"
                onSubmitEditing={() => {
                  descriptionInputRef.current?.focus();
                }}
                blurOnSubmit={false}
              />
              <MainInputs
                placeholder="Descripción"
                placeholderTextColor={myTheme.colors.primary}
                value={description}
                onChangeText={setDescription}
                ref={descriptionInputRef}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
              <MainButton onPress={handleOnPress}>
                <CheckIcon color={myTheme?.colors.primary} />
              </MainButton>
            </FormContainer>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
