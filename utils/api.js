import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY, setDummyData } from './_deck';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        // @todo: Remove dummy data when project is finished
        .then((decks) => {
            return decks === null
                ? setDummyData()
                : JSON.parse(decks)
        })
}

export function setCard({ card, deck }) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
        const decks = results ? JSON.parse(results) : {};
        decks[deck].questions = decks[deck].questions.concat([card]);

        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
    });
}
