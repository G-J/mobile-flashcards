import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Title, Form, Item, Label, Input, Textarea, Button, Text, Icon } from 'native-base';
import { globalStyles } from '../assets/styles/globalStyles';

class NewCard extends Component {
    render() {
        return (
            <View>
                <Title>Add Card to - Title - Deck</Title>
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

export default connect()(NewCard);