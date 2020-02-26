import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Title, Label, Input, Button, Text, Icon, Content, Container } from 'native-base';
import { globalStyles } from '../assets/styles/globalStyles';
import { addDeck } from '../actions';

class NewDeck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    handleFormSubmit = () => {
        const { title } = this.state;
        const { dispatch, navigation } = this.props;

        this.props.dispatch(addDeck(title));
        navigation.navigate('DeckList');
    }

    handleInput = (value) => {
        this.setState(() => ({
            title: value
        }));
    }

    render() {
        const { title } = this.state;
        return (
            <Container>
                <Content padder>
                    <Title>What is the title of your new deck?</Title>
                    <Form>
                        <Item stackedLabel last>
                            <Label>Deck title</Label>
                            <Input
                                value={title}
                                onChangeText={(value) => this.handleInput(value)}
                            />
                        </Item>
                    </Form>
                    <Button
                        iconRight
                        style={globalStyles.button}
                        onPress={this.handleFormSubmit}
                        disabled={title === ''}
                    >
                        <Text>Create deck</Text>
                        <Icon name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'arrow-forward'} />
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default connect()(NewDeck);