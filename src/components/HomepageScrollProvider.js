import React, { createContext, useRef } from "react";

export const HomepageScrollContext = createContext();

export const HomepageScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  return (
    <HomepageScrollContext.Provider value={{ scrollRef }}>
      {children}
    </HomepageScrollContext.Provider>
  );
};
