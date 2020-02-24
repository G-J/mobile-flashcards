import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { View, Title, Form, Item, Label, Input, Textarea, Button, Text, Icon } from 'native-base';
import { addCard } from '../actions';
import { setCard } from '../utils/api';
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
        const { title } = this.props;

        this.props.dispatch(addCard({
            card: {
                question,
                answer
            },
            deck: title
        }));
        setCard({
            card :{
                question,
                answer
            },
            deck: title
        });

    }

    handleInput = (e) => {
        e.persist();

        this.setState(() => ({
            [e.target.name]: e.target.value
        }));
    }

    render() {
        const { decks, title } = this.props;
        const { question, answer } = this.state;
        return (
            <View>
                <Title>Add Card to {decks[title].title} Deck</Title>
                <Form>
                    <Item stackedLabel>
                        <Label>Question</Label>
                        <Input
                            multiline={true}
                            numberOfLines={10}
                            name='question'
                            value={question}
                            onChange={this.handleInput}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Answer</Label>
                        <Input
                            multiline={true}
                            numberOfLines={10}
                            name='answer'
                            value={answer}
                            onChange={this.handleInput}
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
            </View>
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