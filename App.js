import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import {
  Container,
  Header,
  Content,
  Text,
  Title,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base';
import { Platform } from 'react-native';
// import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';

class App extends Component {
  componentDidMount() {

  }

  render() {
    const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return (
      <Provider store={store}>
        <Container>
          <Header>
            <Title>Flashin'</Title>
          </Header>
          <Content padder>
            {/* <DeckList /> */}
            <NewDeck />
          </Content>
          <Footer>
            <FooterTab>
            <Button>
                <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'home'} />
                <Text>Home</Text>
              </Button>
            </FooterTab>
            <FooterTab>
              <Button>
                <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'add'} />
                <Text>Add Deck</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container >
      </Provider>
    );
  }
}

export default App;