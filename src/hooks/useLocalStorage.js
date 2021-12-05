import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useLocalStorage = (itemName, initialValue) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const [items, setItems] = useState(initialValue);
  
    useEffect(() => {
  
      setTimeout(() => {
        try {
          const localstorageItem = localStorage.getItem(itemName);
          let parseItems;
  
          if (!localstorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parseItems = [];
  
  
          } else {
            parseItems = JSON.parse(localstorageItem);
          }
          setItems(parseItems);
          setLoading(false);
        } catch (error) {
          setError(true);
        }
  
      }, 1000);
    
    },[]);
  
  
  
  
  
    const saveItem = (newItem) => {
  
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItems(newItem)
  
    }
  
    return {
      items, saveItem, loading, error
    }
  }

  
  export default useLocalStorage;