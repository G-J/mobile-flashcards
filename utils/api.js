import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from './_deck';

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}
