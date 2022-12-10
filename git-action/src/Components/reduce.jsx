import React from "react";

export const initialValue = {
  data: [],
  loading: false,
  error: false,
};

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case "Success": {
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    }
    case "loading": {
      return {
        ...state,
        loading: true,
        data: [],
        error: false,
      };
    }
    case "error": {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }

    default: {
      return state;
    }
  }
};
