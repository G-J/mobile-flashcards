import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Body, Text, View } from 'native-base';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';

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
                        ? <Card>
                            <CardItem header>
                                <Text>Deck title</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>2 cards</Text>
                                </Body>
                            </CardItem>
                        </Card>
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