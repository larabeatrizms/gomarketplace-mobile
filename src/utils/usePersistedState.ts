import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(async () => {
    const storageValue = await AsyncStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    async function save(): Promise<void> {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    }

    save();
  }, [key, state]);

  return [state, setState];
}
export default usePersistedState;
