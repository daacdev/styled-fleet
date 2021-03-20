/**
 * Function to manage local storage for theme mode
 * @param key key that identifies the theme mode on local storage
 * @returns Object with set and get functions for the theme value of mode
 */
export const createThemeModeStorage = (key: string) => {
  return {
    get: () => {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.warn(
          'localStorage is disabled and color mode might not work as expected.',
          'Please check your Site Settings.',
          error
        );
      }
      return null;
    },
    set: (mode: string) => {
      try {
        localStorage.setItem(key, mode);
      } catch (error) {
        console.warn(
          'localStorage is disabled and color mode might not work as expected.',
          'Please check your Site Settings.',
          error
        );
      }
    },
  };
};
