import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [history, setHistory] = useState([]);
  const historyStorageKey = "history"
  
  useEffect(()=>{
    const savedHistory = localStorage.getItem(historyStorageKey)
    setHistory(JSON.parse(savedHistory || "[]"))

  },[])

  function updateHistory(expression, result) {

    setHistory((prev) => {
       const updatedHistory = [
        ...prev,
        `${expression}=${result}`
    ];

       localStorage.setItem(historyStorageKey, JSON.stringify(updatedHistory))

       return updatedHistory
    })
  }



  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  return useContext(CalculatorContext);
}