import React, { createContext, useState, useEffect, useCallback } from "react";

interface JournalEntry {
  _id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
}

interface JournalContextProps {
  entries: JournalEntry[];
  fetchEntries: () => void;
  userId: string | null;
  setUserId: (id: string) => void;
}

export const JournalContext = createContext<JournalContextProps>({
  entries: [],
  fetchEntries: () => {},
  userId: null,
  setUserId: () => {},
});


export const JournalProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children,
  }) => {
    const [entries, setEntries] = useState<JournalEntry[]>([]);
    const [userId, setUserId] = useState<string | null>(null);
  
    const fetchEntries = useCallback(async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${userId}/journals`);
        const data = await response.json();
        setEntries(data);
      } catch (error) {
        console.error("Failed to fetch entries:", error);
      }
    }, [userId]);
  
    useEffect(() => {
      if (userId) {
        fetchEntries();
      }
    }, [userId, fetchEntries]);
  
    return (
      <JournalContext.Provider value={{ entries, fetchEntries, userId, setUserId }}>
        {children}
      </JournalContext.Provider>
    );
  };