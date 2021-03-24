/**
 * Function to manage local storage for theme
 * @param key String that identifies the key in local storage
 * @returns Object with set and get functions for the theme
 */
export const createLocalStorage = (key: string) => ({
  get: () => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn(
        'localStorage is disabled and the theme may not work as expected.',
        'Please check your Site Settings.',
        error
      );
    }
    return null;
  },
  set: (value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn(
        'localStorage is disabled and the theme may not work as expected.',
        'Please check your Site Settings.',
        error
      );
    }
  },
});
