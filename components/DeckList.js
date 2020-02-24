import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Body, Text, View, Button } from 'native-base';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';
import DeckCard from './DeckCard';
import { NavigationContainer } from '@react-navigation/native';

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        getDecks()
            .then((decks) => {
                return dispatch(receiveDecks(decks))
            })
    }

    onCardPress = (title) => {
        this.props.navigation.navigate('Deck',{ title });
    }

    render() {
        const { decks, subjects, navigation } = this.props;
        return (
            <View>
                {
                    subjects.length
                        ? subjects.map((subject) => (
                            <DeckCard
                                key={subject}
                                title={decks[subject].title}
                                total={decks[subject].questions.length}
                                handlePress={this.onCardPress}
                            />
                        ))
                        : 
                        <View>
                            <Text>No decks yet.</Text>
                            <Button
                                onPress={() => navigation.navigate('NewCard', {title: 'React'})}
                            >
                                <Text>Create one!</Text>
                            </Button>
                        </View>

                }
            </View>
        )
    }
}

function mapStateToProps(decks) {
    const subjects = Object.keys(decks);

    return {
        subjects,
        decks
    }
}

export default connect(mapStateToProps)(DeckList);