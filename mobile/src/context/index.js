/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import api from '../api';

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SET_QUIZES':
          return {
            ...prevState,
            quizes: action.data,
          };
        case 'UPDATE_QUIZES':
          return {
            ...prevState,
            quizes: action.data,
          };
      }
    },
    {
      quizes: [],
    },
  );
  useEffect(() => {
    fetchQuizes();
  }, []);

  const updateQuizes = async (countDown, gotItRight, index) => {
    try {
      const res = await api.put(`/quiz/complet`, {
        gotItRight,
        time: countDown,
        id: state.quizes[index].id,
      });
      state.quizes.splice(index, 1, res.data);

      dispatch({ type: 'UPDATE_QUIZES', data: state.quizes });
    } catch (error) {}
  };

  const fetchQuizes = async () => {
    try {
      const res = await api.get('/quiz');
      dispatch({ type: 'SET_QUIZES', data: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        state,
        updateQuizes,
      }}>
      {children}
    </QuizContext.Provider>
  );
};
