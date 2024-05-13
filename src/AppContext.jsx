import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  /* STATES */
  // DROPDOWN
  const [kegiatan, setKegiatan] = useState(null);
  const [subKegiatan, setSubKegiatan] = useState(null);
  /* END STATES */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await fetch("https://app.documentero.com/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          document: "jQe9SvCcpHhgvzecFWNt",
          apiKey: "G36DFPI-C2PU74A-RYSINIA-SU7YSSQ",
          format: "docx",
          data: {
            NOMOR_SUB_KEGIATAN: "NOMOR_SUB_KEGIATAN",
            TEXT_SUB_KEGIATAN: "TEXT_SUB_KEGIATAN",
            KEGIATAN: kegiatan?.label,
            SUB_KEGIATAN: subKegiatan?.label,
            INDIKATOR: "INDIKATOR",
            TARGET: "TARGET",
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const responseData = await response.json();

      // Assuming the response data contains a URL
      if (responseData.data) {
        // Open the URL in a new window
        window.open(responseData.data, "_blank");
      } else {
        throw new Error("No URL found in response data");
      }
    } catch (error) {
      // Handle error here
      console.error("Error:", error.message);
    }
  };
  return (
    <AppContext.Provider
      value={{
        errorMessage,
        handleSubmit,
        kegiatan,
        setKegiatan,
        subKegiatan,
        setSubKegiatan,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useApp };
