/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Animated, BackHandler } from 'react-native';
import { Header } from '../../components/Header';
import QuizAnswerCard from '../../components/QuizAnswerCard';
import {
  Container,
  Wrapper,
  ContainerQuestion,
  Question,
  ContainerAnswers,
  ListAnswers,
  Divisor,
  CountDown,
} from './styles';

export function Quiz() {
  const navigation = useNavigation();
  const {
    params: {
      data: { dataQuiz, index },
    },
  } = useRoute();
  let clockCall = useRef(null);
  let defaultCountDown = 15;

  const [countDown, setCountDown] = useState(defaultCountDown);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', function () {
        navigation.goBack();
        return true;
      });
    }, []),
  );

  useEffect(() => {
    if (!dataQuiz.completed) {
      //Iniciar o contador e atribuir o valor ao clockCall para ser possível manipular o setInterval
      clockCall.current = setInterval(() => {
        fnDecrementClock();
      }, 1000);
    }

    // Limpar o setInterval caso a tela seja desmontada.
    return () => {
      clearInterval(clockCall.current);
    };
  });

  //função decrementar o countDown
  const fnDecrementClock = useCallback(() => {
    if (countDown === 0) {
      setCountDown(0);
      clearInterval(clockCall.current);
    } else {
      setCountDown((c) => c - 1);
    }
  }, [countDown, clockCall]);

  /* usamos o hook useMemo para pegar as respostas
     incorretas e a correta armazená-las em um array e então
     usar a função sort() para embaralhar as respostas.
     O hook useMemo serve para obtermos este valor apenas
     uma vez e garantir que o valor será o mesmo, assim se
     houver qualquer nova renderização as respostas não mudam
     a menos que as dependências mudem.*/
  const quizAnswers = useMemo(() => {
    const answers = [...dataQuiz.incorrectAnswers, dataQuiz.correctAnswer];
    answers.sort((a, b) => {
      // o cálculo abaixo sempre retorna positivo ou negativo
      // assim garantimos aleatoriedade no sort.
      return 0.5 - Math.random();
    });
    return answers;
  }, [dataQuiz]);

  //Valor da opacidade da questão do Quiz
  const fadeAnim = useRef(new Animated.Value(0)).current;

  //Função para animar a opacidade da questão do Quiz
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header fontSize={22} title={dataQuiz.name ?? 'Questionário'} />

      <Wrapper>
        <ContainerQuestion>
          <Animated.View style={{ opacity: fadeAnim }}>
            <Question>
              {dataQuiz.question ??
                'Que doença se caracteriza pelo excesso de açúcar no sangue?'}
            </Question>
          </Animated.View>
        </ContainerQuestion>

        <ContainerAnswers>
          <ListAnswers
            data={quizAnswers}
            keyExtractor={(item) => String(item)}
            renderItem={({ item, index: i }) => (
              <QuizAnswerCard
                index={index}
                indexAnswer={i}
                clockCall={clockCall}
                countDown={countDown}
                data={dataQuiz}
                item={item}
              />
            )}
          />
        </ContainerAnswers>
        <Divisor />
        <CountDown>
          00'00"{countDown < 10 ? '0' + countDown : countDown}
        </CountDown>
      </Wrapper>
    </Container>
  );
}
