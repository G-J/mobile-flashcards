import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Title, View, Label, Input, Button, Text, Icon } from 'native-base';

class NewDeck extends Component {
    render() {
        return (
            <View>
                <Title>What is the title of your new deck?</Title>
                <Form>
                    <Item stackedLabel last>
                        <Label>Deck title</Label>
                        <Input />
                    </Item>
                </Form>
                <Button iconRight style={{ marginTop: 40 }}>
                    <Text>Create deck!</Text>
                    <Icon name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'arrow-forward'} />
                </Button>
            </View>
        )
    }
}

export default connect()(NewDeck);