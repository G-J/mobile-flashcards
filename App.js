import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Deck from './components/Deck';
import NewCard from './components/NewCard';
import NewDeck from './components/NewDeck';
import Quiz from './components/Quiz';
import DeckList from './components/DeckList';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    const store = createStore(reducer, middleware);

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="DeckList">
            <Stack.Screen
              name="DeckList"
              component={DeckList}
              options={{
                title: 'Flashing Cards'
              }}
            />
            <Stack.Screen
              name="Quiz"
              component={Quiz}
            />
            <Stack.Screen
              name="Deck"
              component={Deck}
              options={({route}) => ({title: route.params.title})}
            />
            <Stack.Screen
              name="NewCard"
              component={NewCard}
              options={{
                title: 'Add Card'
              }}
            />
            <Stack.Screen
              name="NewDeck"
              component={NewDeck}
              options={{
                title: 'Add Deck'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;