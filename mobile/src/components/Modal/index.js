/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Container,
  Wrapper,
  ContainerModal,
  Divisor,
  ModalTitle,
  ModalDescription,
  DescriptionWrapper,
  ButtonsWrapper,
  Start,
  Cancel,
  TextStart,
  TextCancel,
} from './style';

export function Modal({
  title,
  description,
  initQuiz,
  modalQuiz = false,
  visible = false,
  calcelPress,
}) {
  const navigation = useNavigation();

  const handleCancel = () => {
    setTimeout(() => {
      calcelPress();
    }, 200);
  };

  const handleNavigate = () => {
    navigation.navigate("Dashboard");
  };

  const handleInit = () => {
    initQuiz();
  };

  return (
    <Container visible={visible}>
      <ContainerModal>
        <Wrapper>
          <ModalTitle>{title ?? 'Questionário saúde'}</ModalTitle>
          <Divisor />
          <DescriptionWrapper>
            <ModalDescription>
              {description ??
                'Quanto mais rápido responder corretamente, mais pontos você vai ganhar'}
            </ModalDescription>
          </DescriptionWrapper>
          <Divisor />

          <ButtonsWrapper modalQuiz={modalQuiz}>
            {!modalQuiz ? (
              <Cancel onPress={handleCancel}>
                <TextCancel>Cancelar</TextCancel>
              </Cancel>
            ) : null}

            <Start
              onPress={() => {
                if (!modalQuiz) {
                  handleInit();
                } else {
                  handleNavigate();
                }
              }}>
              <TextStart>{!description ? 'Iniciar' : 'OK'}</TextStart>
            </Start>
          </ButtonsWrapper>
        </Wrapper>
      </ContainerModal>
    </Container>
  );
}
