import { getDecks, setCard } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_CARD = 'ADD_CARD';

function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

function cardAdded({card, deck}) {
    return {
        type: ADD_CARD,
        card,
        deck
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return getDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks));
            });
    }
}

export function addCard({ card, deck }) {
    return (dispatch) => {
        return setCard({ card, deck })
            .then(() => {
                dispatch(cardAdded({card, deck}));
            })
    }
}