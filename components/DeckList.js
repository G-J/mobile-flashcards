import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Body, Text, View } from 'native-base';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';
import DeckCard from './DeckCard';

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        getDecks()
            .then((decks) => {
                return dispatch(receiveDecks(decks))
            })
    }

    render() {
        const { decks } = this.props;

        return (
            <View>
                {
                    Object.keys(decks).length
                        ? <DeckCard
                            title="Deck Title"
                            total={2}
                        />
                        : <Text>No decks yet. Create one!</Text>
                }
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList);