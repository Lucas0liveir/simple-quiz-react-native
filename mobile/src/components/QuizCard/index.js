/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  QuizContainer,
  QuizStatus,
  QuizText,
  WrapperPointsContainer,
} from './styles';
import { Modal } from '../Modal';

export function QuizCard({ dataQuiz = [], index }) {
  const navigation = useNavigation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetModalState = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNavigate = () => {
    navigation.navigate('Quiz', { data: { dataQuiz, index } });
    handleSetModalState();
  };

  return (
    <Container enabled={!dataQuiz.completed} onPress={handleSetModalState}>
      <QuizContainer>
        <QuizStatus
          isCompleted={dataQuiz.completed}
          userScore={dataQuiz.userScore}
        />
        <QuizText>{dataQuiz.name ?? 'teste'}</QuizText>
      </QuizContainer>
      <WrapperPointsContainer>
        <QuizText>
          {dataQuiz.completed
            ? Number(dataQuiz.userScore).toFixed(1)
            : Number(dataQuiz.maxScore).toFixed(1)}
          pts
        </QuizText>
      </WrapperPointsContainer>
      <Modal
        calcelPress={() => handleSetModalState()}
        title={dataQuiz.name}
        visible={isModalOpen}
        initQuiz={handleNavigate}
      />
    </Container>
  );
}
