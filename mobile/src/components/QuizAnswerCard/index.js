/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { Container, QuizAnswerText } from './styles';
import { useQuiz } from '../../hooks';
import * as Animatable from 'react-native-animatable';

function QuizAnswerCard({
  item,
  data,
  countDown,
  clockCall,
  index,
  indexAnswer,
}) {
  const {
    state: { quizes },
    updateQuizes,
  } = useQuiz();

  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);

  async function checkAnswer(answer) {
    //Atualiza o quiz e verifica se a resposta é correta ou não
    //Limpa o CountDown seta os devidos estados e encerra o quiz
    try {
      clearInterval(clockCall.current);
      let gotItRight = answer === data.correctAnswer;
      await updateQuizes(countDown, gotItRight, index);
      setCompleted(true);
      setIsCorrect(answer === data.correctAnswer);

      setTimeout(() => {
        setEndQuiz(true);
      }, 750);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    //função que verifica se o contador zerou para encerrar o Quiz.
    async function checkCountDown() {
      try {
        if (countDown === 0) {
          await updateQuizes(countDown, false, index);
          setEndQuiz(true);
          setEndTime(true);
          return;
        }
      } catch (e) {
        console.log(e);
      }
    }

    checkCountDown();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown]);

  return (
    <Animatable.View
      animation="flipInY"
      duration={1000}
      delay={indexAnswer * 300}>
      <Container
        onPress={() => {
          checkAnswer(item);
        }}
        enabled={!quizes[index].completed}
        isCompleted={completed}
        userScore={quizes[index].userScore}>
        <QuizAnswerText>{item ?? 'Hepatite C'}</QuizAnswerText>
        <Modal
          visible={endQuiz}
          modalQuiz={true}
          title={
            endTime
              ? 'Tempo esgostado'
              : isCorrect
              ? 'Você acertou!'
              : 'Você errou!'
          }
          description={
            endTime
              ? `A resposta correta para o Quiz era "${data.correctAnswer}"`
              : isCorrect
              ? `Parabéns, você selecionou a opção correta em um tempo de 00:00:${
                  countDown < 10 ? '0' + countDown : countDown
                }`
              : `A resposta correta para o Quiz era "${data.correctAnswer}"`
          }
        />
      </Container>
    </Animatable.View>
  );
}

export default QuizAnswerCard;
