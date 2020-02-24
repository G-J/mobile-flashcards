import React, { Component } from 'react';
import { View, Text, Title, H2, Card, CardItem, Body, Right, Button, Icon } from 'native-base';
import { Platform, StyleSheet } from 'react-native';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0,
            showAnswer: false,
            score: {}
        }
    }

    toggleAnswer = () => {
        console.log('click');
        return this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer
        }));
    }

    render() {
        const { showAnswer } = this.state;
        console.log(showAnswer);
        return (
            <View>
                <Title>A Quiz on - title of deck -</Title>
                <Card style={{ marginTop: 50 }}>
                    <CardItem header>
                        <Body>
                            <Text note>React</Text>
                        </Body>
                        <Right>
                            <Text note>1 / 3</Text>
                        </Right>
                    </CardItem>
                    <CardItem style={{justifyContent: 'space-between'}}>
                        <Text note>Question:</Text>
                        <Right>
                            <Button transparent iconLeft onPress={this.toggleAnswer}>
                                <Icon active name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'} />
                                <Text style={{paddingRight: 0}}>Show answer</Text>
                            </Button>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <H2 style={{ textAlign: 'center' }}>What about that react stuff huh?</H2>
                    </CardItem>
                    {showAnswer && (
                        <View>
                            <CardItem style={{ marginTop: 20 }}>
                                <Text note>Answer:</Text>
                            </CardItem>
                            <CardItem>
                                <Text>This is the answer to the question</Text>
                            </CardItem>
                        </View>
                    )}
                    <CardItem footer style={{ justifyContent: 'flex-end' }}>

                    </CardItem>
                </Card>
                <View style={styles.buttonGroup}>
                    <Button iconRight light>
                        <Text>False</Text>
                        <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} />
                    </Button>
                    <Button iconRight>
                        <Text>Correct</Text>
                        <Icon name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} />
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonGroup: {
        marginTop: 30,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        padding: 15
    }
})

export default Quiz;