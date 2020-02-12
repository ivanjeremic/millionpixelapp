import React, { useState, useEffect } from "react";

export const HooksContext = React.createContext();

export const HooksProvider = ({ children }) => {
  const HooksReducer = (state, action) => {
    switch (action.type) {
      case "field":
        return {
          ...state,
          [action.field]: action.value
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = React.useReducer(HooksReducer, {
    isIvan: ""
  });

  // useFormFields Hook
  /* use it like this, field needs to have name prop same ans fields name.
  const [fields, handleFieldChange] = useFormFields({
    username: '',
    password: '',
    somefield: ''
  }); 
  */
  const useFormFields = initialState => {
    const [fields, setValues] = useState(initialState);

    return [
      fields,
      function(event) {
        setValues({
          ...fields,
          [event.target.name]: event.target.value
        });
      }
    ];
  };

  // useNetwork Hook
  const useNetwork = () => {
    const initialValue =
      typeof window !== "undefined" ? window.navigator.onLine : true;
    const [isOnline, setNetwork] = useState(initialValue);
    const updateNetwork = () => setNetwork(window.navigator.onLine);

    useEffect(() => {
      window.addEventListener("offline", updateNetwork);
      window.addEventListener("online", updateNetwork);
      return () => {
        window.removeEventListener("offline", updateNetwork);
        window.removeEventListener("online", updateNetwork);
      };
    });

    return isOnline;
  };

  return (
    <HooksContext.Provider
      value={{ isIvan: state.isIvan, useFormFields, useNetwork }}
    >
      {children}
    </HooksContext.Provider>
  );
};
