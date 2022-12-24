/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { BackHandler } from 'react-native';
import { Header } from '../../components/Header';
import { QuizCard } from '../../components/QuizCard';
import { useQuiz } from '../../hooks';
import {
  Container,
  Content,
  CountQuizes,
  CountTitle,
  CountInfo,
  ListQuizes,
  ContainerSectionText,
  Title,
  TitlePoints,
} from './styles';

export function Dashboard() {
  const { state } = useQuiz();
  const {
    state: { quizes },
  } = useQuiz();

  // Obtemos a quantidade já respondida dos Quizes.
  // O useMemo irá garantir sempre o retorno atualizado.
  const completedQuizes = useMemo(() => {
    let total = 0;
    state.quizes?.forEach((item) => {
      if (item.completed) {
        total += 1;
      }
    });

    return total;
  }, [state]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', function () {
        BackHandler.exitApp();
        return true;
      });
      return () => {
        BackHandler.addEventListener('hardwareBackPress', function () {
          return false;
        });
      };
    }, []),
  );
  return (
    <Container>
      <Header title="quiz" />
      <Content>
        <CountQuizes>
          <CountTitle>quizes cumpridos: </CountTitle>
          <CountInfo>
            {completedQuizes}/{quizes?.length}
          </CountInfo>
        </CountQuizes>

        <ContainerSectionText>
          <Title>Atividades</Title>
          <TitlePoints>Pontuação</TitlePoints>
        </ContainerSectionText>
        <ListQuizes
          data={quizes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ _, index }) => (
            <QuizCard dataQuiz={quizes[index]} index={index} />
          )}
        />
      </Content>
    </Container>
  );
}
