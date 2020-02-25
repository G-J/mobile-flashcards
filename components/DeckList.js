import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { Text, View, Button, Fab, Icon } from 'native-base';
import { handleInitialData } from '../actions';
import DeckCard from './DeckCard';

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    onCardPress = (title) => {
        this.props.navigation.navigate('Deck', { title });
    }

    render() {
        const { decks, subjects, navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
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
                                onPress={() => navigation.navigate('NewCard', { title: 'React' })}
                            >
                                <Text>Create one!</Text>
                            </Button>
                        </View>

                }
                <Fab
                    active={true}
                    direction='up'
                    position='bottomRight'
                    onPress={() => navigation.navigate('NewDeck')}
                >
                    <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'add'}></Icon>
                </Fab>
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