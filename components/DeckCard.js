import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

const DeckCard = (props) => {
    const { title, total, handlePress } = props;
    return (
        <Card>
            <CardItem
                button={handlePress ? true : false}
                onPress={() => {
                    if(handlePress) {
                        handlePress(title);
                    }
                }}
                header
            >
                <Text>{title}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{`${total} ${total === 1 ? 'card' : 'cards'}`}</Text>
                </Body>
            </CardItem>
        </Card>
    )
}

export default DeckCard;