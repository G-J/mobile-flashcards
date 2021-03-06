import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { View, Title, Form, Item, Label, Input, Container, Button, Text, Icon, Content } from 'native-base';
import { addCard } from '../actions';
import { globalStyles } from '../assets/styles/globalStyles';

class NewCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answer: ''
        }
    }

    handleFormSubmit() {
        const { question, answer } = this.state;
        const { title, navigation } = this.props;

        this.props.dispatch(addCard({
            card: {
                question,
                answer
            },
            deck: title
        }));

        navigation.goBack();
    }

    handleInput = (value, name) => {
        this.setState(() => ({
            [name]: value
        }));
    }

    render() {
        const { decks, title } = this.props;
        const { question, answer } = this.state;
        return (
            <Container>
                <Content padder contentContainerStyle={{ flex: 1 }}>
                    <Title>Add Card to {decks[title].title} Deck</Title>
                    <Form>
                        <Item stackedLabel>
                            <Label>Question</Label>
                            <Input
                                multiline={true}
                                numberOfLines={10}
                                name='question'
                                value={question}
                                onChangeText={(value) => this.handleInput(value, 'question')}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Answer</Label>
                            <Input
                                multiline={true}
                                numberOfLines={10}
                                name='answer'
                                value={answer}
                                onChangeText={(value) => this.handleInput(value, 'answer')}
                            />
                        </Item>
                    </Form>
                    <Button
                        iconRight
                        style={globalStyles.button}
                        onPress={() => this.handleFormSubmit()}
                    >
                        <Text>Add card</Text>
                        <Icon name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'arrow-forward'} />
                    </Button>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(decks, { route: { params: { title } } }) {
    return {
        decks,
        title
    }
}

export default connect(mapStateToProps)(NewCard);