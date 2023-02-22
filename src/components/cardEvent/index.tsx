import * as S from "./styles";

export interface IProps {
  img?: string;
  title: string;
  local: string;
  hour: string;
}

export const CardEvent = ({ hour, local, title, img }: IProps) => {
  return (
    <S.Content>
      <S.Image
        style={{ backgroundImage: `url(${img ?? "images/confetti.jpg"})` }}
      ></S.Image>
      <S.DescriptionContent>
        <S.Title>{title}</S.Title>
        <S.Local>Local: {local}</S.Local>
        <S.Hour>Horário: {hour}h</S.Hour>
      </S.DescriptionContent>
    </S.Content>
  );
};
