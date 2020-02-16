import React from 'react';
import {
  Container,
  Header,
  Text,
  Title,
  Footer,
  FooterTab,
  Content,
  Body,
  Button,
  Icon,
  Card,
  CardItem
} from 'native-base';
import { Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function App() {
  return (
    <Container>
      <Header>
        <Title>Flashin'</Title>
      </Header>
      <Content padder>
        <Card>
          <CardItem header>
            <Text>Deck title</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>2 cards</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Icon name={Platform.OS === 'ios' ? 'ios-apps': 'apps'} />
            <Text>Decks</Text>
          </Button>
        </FooterTab>
        <FooterTab>
          <Button>
            <Icon name={Platform.OS === 'ios' ? 'ios-add': 'add'} />
            <Text>Add Deck</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container >
  );
}