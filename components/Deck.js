import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Button, View, Text, Icon } from 'native-base';
import DeckCard from './DeckCard';
import { globalStyles } from '../assets/styles/globalStyles';

class Deck extends Component {
    render() {
        return (
            <View>
                <DeckCard
                    title="This is the deck title"
                    total={3}
                />
                <Button iconRight light style={globalStyles.button}>
                    <Text>Add card</Text>
                    <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'add'} />
                </Button>
                <Button iconRight style={globalStyles.button}>
                    <Text>Start Quiz</Text>
                    <Icon name={Platform.OS === 'ios' ? 'ios-play' : 'play'} />
                </Button>
            </View>
        )
    }
}

export default Deck;