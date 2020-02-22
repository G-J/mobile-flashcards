import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Title, View, Label, Input, Button, Text, Icon } from 'native-base';
import {globalStyles} from '../assets/styles/globalStyles';

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
                <Button iconRight style={globalStyles.button}>
                    <Text>Create deck</Text>
                    <Icon name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'arrow-forward'} />
                </Button>
            </View>
        )
    }
}

export default connect()(NewDeck);