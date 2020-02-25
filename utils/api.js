import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY, setDummyData } from './_deck';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        // @todo: Remove dummy data when project is finished
        .then((decks) => {
            return decks === null
                ? setDummyData()
                : JSON.parse(decks)
        });
}

export function setCard({ card, deck }) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const object = results ? JSON.parse(results) : {};
            const decks = {
                ...object,
                [deck]: {
                    ...object[deck],
                    questions: object[deck].questions.concat([card])
                }
            }

            return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
        });
}
