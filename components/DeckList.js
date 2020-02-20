import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Card, CardItem, Body, Text } from 'native-base';
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
            <Content padder>
                {Object.keys(decks).length
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

            </Content>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList);