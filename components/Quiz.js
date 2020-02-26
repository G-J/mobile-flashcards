import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Title, H2, Card, CardItem, Body, Right, Button, Icon, H1, Container, Content } from 'native-base';
import { Platform, StyleSheet } from 'react-native';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0,
            showAnswer: false,
            score: 0
        }
    }

    toggleAnswer = () => {
        return this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer
        }));
    }

    next = (score) => {
        if (score) {
            this.setState((prevState) => ({
                score: prevState.score + 1
            }));
        }

        this.setState((prevState) => {
            return ({
                currentQuestion: prevState.currentQuestion + 1,
                showAnswer: false
            })
        });
    }

    render() {
        const { showAnswer, currentQuestion, score } = this.state;
        const { title, decks, questions } = this.props;
        return (
            <Container>
                <Content padder>
                    <Title>A Quiz on {decks[title].title}</Title>
                    {
                        currentQuestion < questions.length
                            ?
                            <View>
                                <Card style={{ marginTop: 50 }}>
                                    <View>
                                        <CardItem header>
                                            <Body>
                                                <Text note>{decks[title].title}</Text>
                                            </Body>
                                            <Right>
                                                <Text note>{currentQuestion + 1} / {questions.length}</Text>
                                            </Right>
                                        </CardItem>
                                        <CardItem style={{ justifyContent: 'space-between' }}>
                                            <Text note>Question:</Text>
                                            <Right>
                                                <Button transparent iconLeft onPress={this.toggleAnswer}>
                                                    <Icon active name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'} />
                                                    <Text style={{ paddingRight: 0 }}>Show answer</Text>
                                                </Button>
                                            </Right>
                                        </CardItem>
                                        <CardItem>
                                            <H2 style={{ textAlign: 'center' }}>{questions[currentQuestion].question}</H2>
                                        </CardItem>
                                        {showAnswer && (
                                            <View>
                                                <CardItem style={{ marginTop: 20 }}>
                                                    <Text note>Answer:</Text>
                                                </CardItem>
                                                <CardItem>
                                                    <Text>{questions[currentQuestion].answer}</Text>
                                                </CardItem>
                                            </View>
                                        )}
                                    </View>
                                </Card>
                                <View style={styles.buttonGroup}>
                                    <Button
                                        iconRight
                                        light
                                        onPress={() => this.next()}
                                    >
                                        <Text>False</Text>
                                        <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} />
                                    </Button>
                                    <Button
                                        iconRight
                                        onPress={() => { this.next(true) }}
                                    >
                                        <Text>Correct</Text>
                                        <Icon name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'} />
                                    </Button>
                                </View>
                            </View>
                            :
                            <Card>
                                <CardItem header>
                                    <Text>you scored:</Text>
                                </CardItem>
                                <CardItem>
                                    <H1>{`${Math.round(((score / questions.length) + Number.EPSILON) * 100)}%`}</H1>
                                </CardItem>
                            </Card>
                    }
                </Content>
            </Container >
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
});

function mapStateToProps(decks, { route: { params: { title } } }) {
    const questions = decks[title].questions;
    return {
        title,
        decks,
        questions
    }
}

export default connect(mapStateToProps)(Quiz);