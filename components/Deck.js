import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { Button, View, Text, Icon } from 'native-base';
import DeckCard from './DeckCard';
import { globalStyles } from '../assets/styles/globalStyles';

class Deck extends Component {
    render() {
        const { decks, title, navigation } = this.props;

        return (
            <View>
                <DeckCard
                    title={decks[title].title}
                    total={decks[title].questions.length}
                />
                <Button
                    iconRight
                    light
                    style={globalStyles.button}
                    onPress={() => navigation.navigate('NewCard', { title })}
                >
                    <Text>Add card</Text>
                    <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'add'} />
                </Button>
                <Button
                    iconRight
                    style={globalStyles.button}
                    onPress={() => navigation.navigate('Quiz', { title })}
                >
                    <Text>Start Quiz</Text>
                    <Icon name={Platform.OS === 'ios' ? 'ios-play' : 'play'} />
                </Button>
            </View>
        )
    }
}

function mapStatetoProps(decks, { route: { params: { title } } }) {
    return {
        title,
        decks
    }
}

export default connect(mapStatetoProps)(Deck);