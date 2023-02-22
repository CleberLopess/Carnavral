import * as S from "./styles";
import { FormProvider, useForm } from "react-hook-form";

export const CardShare = () => {
  const list = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      nameBloco: "",
      data: "",
    },
  });
  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((data) => {});

  const optionsList = () => {
    return (
      <datalist id="list">
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </datalist>
    );
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentHeader>
          <S.Title>Bem vindo ao CARNAVRAU</S.Title>
          <S.Description>
            Aqui você vai conhecer qual é o seu proximo bloquinho !!
          </S.Description>
        </S.ContentHeader>
        <S.Divider />
        <FormProvider {...methods}>
          <S.Form onSubmit={onSubmit}>
            <S.ContentInput>
              <S.TitleInput>Nome do Bloco</S.TitleInput>
              <S.Input
                {...register("nameBloco")}
                type="text"
                placeholder="Nome do Bloco"
              ></S.Input>
            </S.ContentInput>
            <S.ContentInput>
              <S.TitleInput>Data</S.TitleInput>
              <S.Input
                {...register("data")}
                type="text"
                placeholder="Data"
                list="list"
              ></S.Input>
            </S.ContentInput>
            {optionsList()}
            <S.Button type="submit">Buscar</S.Button>
          </S.Form>
        </FormProvider>
      </S.Content>
    </S.Wrapper>
  );
};
