import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Button, View, Text, Icon } from 'native-base';

class Deck extends Component {
    render() {
        return (
            <View>
                <Button iconRight light>
                    <Text>Add card</Text>
                    <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'add'} />
                </Button>
                <Button iconRight>
                    <Text>Start Quiz</Text>
                    <Icon name={Platform.OS === 'ios' ? 'ios-play' : 'play'} />
                </Button>
            </View>
        )
    }
}

export default Deck;