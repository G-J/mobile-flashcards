import { getDecks, setCard, setDeck } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';

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

function deckAdded(deck, title) {
    return {
        type: ADD_DECK,
        deck,
        title
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

export function addDeck(title) {
    return (dispatch) => {
        return setDeck(title).then((deck) => {
            console.log('From promise: ', deck, title);
            dispatch(deckAdded(deck, title));
        })
    }
}