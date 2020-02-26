import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { Text, View, Button, Fab, Icon, Content, Container } from 'native-base';
import { handleInitialData } from '../actions';
import DeckCard from './DeckCard';
import { globalStyles } from '../assets/styles/globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <Container>
                <Content padder contentContainerStyle={{ flexGrow: 1 }}>
                    {
                        subjects.length
                            ? subjects.map((subject) => (
                                <TouchableOpacity
                                    key={subject}
                                    onPress={() => this.onCardPress(decks[subject].title)}
                                >
                                    <DeckCard
                                        title={decks[subject].title}
                                        total={decks[subject].questions.length}
                                    />
                                </TouchableOpacity>
                            ))
                            :
                            <View style={{ flex: 1 }}>
                                <Text>No decks yet.</Text>
                                <Button
                                    style={globalStyles.button}
                                    onPress={() => navigation.navigate('NewDeck')}
                                >
                                    <Text>Create one!</Text>
                                </Button>
                            </View>

                    }
                </Content>
                <Fab
                    active={true}
                    direction='up'
                    position='bottomRight'
                    onPress={() => navigation.navigate('NewDeck')}
                >
                    <Icon name={Platform.OS === 'ios' ? 'ios-add' : 'add'}></Icon>
                </Fab>
            </Container>
        )
    }
}

function mapStateToProps(decks) {
    const subjects = Object.keys(decks).sort();

    return {
        subjects,
        decks
    }
}

export default connect(mapStateToProps)(DeckList);