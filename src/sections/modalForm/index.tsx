import { useCallback } from "react";
import * as S from "./styles";
import { useSelector } from "store";
import { useDispatch } from "react-redux";
import { setModalForm } from "store/slices/modalForm";

export const ModalForm = () => {
  const dispatch = useDispatch();
  const { modalForm } = useSelector((state) => state);

  const handleDispatch = useCallback(() => {
    dispatch(setModalForm(false));
  }, [dispatch]);

  if (!modalForm.showModal) {
    return <></>;
  }

  return (
    <S.Wrapper onClick={handleDispatch}>
      <S.Content>
        <S.ButtonClose onClick={handleDispatch}>X</S.ButtonClose>
        <S.ContentLabel>
          <S.Title>Vem me ajudar! 😄</S.Title>
          <S.Description>
            Cadastre um evento na nossa plataforma, nao vai demorar 2
            minutinhos. 😉
          </S.Description>
        </S.ContentLabel>
        <S.ButtonCTA onClick={handleDispatch}>
          <S.Link href="https://forms.gle/iGp9xaezufb4oxqk8" target="_blank">
            Ajudar
          </S.Link>
        </S.ButtonCTA>
      </S.Content>
    </S.Wrapper>
  );
};
