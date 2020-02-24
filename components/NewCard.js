import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { View, Title, Form, Item, Label, Input, Textarea, Button, Text, Icon } from 'native-base';
import { globalStyles } from '../assets/styles/globalStyles';

class NewCard extends Component {
    render() {
        const { decks, title } = this.props;
        return (
            <View>
                <Title>Add Card to {decks[title].title} Deck</Title>
                <Form>
                    <Item stackedLabel>
                        <Label>Question</Label>
                        <Input
                            multiline={true}
                            numberOfLines={10}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Answer</Label>
                        <Input
                            multiline={true}
                            numberOfLines={10}
                        />
                    </Item>
                </Form>
                <Button iconRight style={globalStyles.button}>
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