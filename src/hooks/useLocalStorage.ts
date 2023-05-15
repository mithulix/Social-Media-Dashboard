import { useState } from "react";

// Custom hook that allows you to store data in local storage
export function useLocalStorage(key: string, initialValue: string) {

  // Use the useState hook to define a state variable that holds the current value of the item
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get the value from local storage using the specified key
      const item = window.localStorage.getItem(key);
      // If the item exists, parse it from JSON and return it. Otherwise, return the initial value passed to the hook
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If there's an error, log it and return the initial value
      console.log(error);
      return initialValue;
    }
  });

  // Define a function to update the value stored in local storage
  const setValue = (value: any) => {
    try {
      // If the new value is a function, call it with the current value of the item to get the new value
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Update the state variable with the new value
      setStoredValue(valueToStore);
      // Store the new value in local storage using the specified key
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // If there's an error, log it
      console.log(error);
    }
  };

  // Return an array containing the current value of the item and the function to update it
  return [storedValue, setValue];
}
