import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY, setDummyData } from './_deck';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    // @todo: Remove dummy data when project is finished
        .then((decks) => {
            return decks === null
                ? setDummyData()
                : decks
        })
}
