import * as S from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

interface Ilist {
  title: string;
  value: string;
}

interface IProps {
  showValues(year: string, labelZone: string): void;

  optionsListZone: Ilist[];
}

export const CardShare = ({ showValues, optionsListZone }: IProps) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      zone: "",
      data: "",
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((data) => {
    showValues(data.data, data.zone);
  });

  const optionsList = () => {
    return (
      <S.Datalist id="list">
        {optionsListZone.map((item, index) => {
          return (
            <S.Option key={index} value={item.title}>
              {item.value}
            </S.Option>
          );
        })}
      </S.Datalist>
    );
  };

  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentHeader>
          <S.Title>Bem vindo ao CARNAVRAU</S.Title>
          <S.Description>
            Aqui você vai conhecer qual é o seu proximo evento no RJ !!
          </S.Description>
        </S.ContentHeader>
        <S.Divider />
        <FormProvider {...methods}>
          <S.Form onSubmit={onSubmit}>
            <S.ContentInput>
              <S.TitleInput>Data</S.TitleInput>
              <S.Input
                {...register("data")}
                type="date"
                placeholder="Data"
              ></S.Input>
            </S.ContentInput>
            {/* <S.ContentInput>
              <S.TitleInput>Zona do evento</S.TitleInput>
              <S.Input
                {...register("zone")}
                type="text"
                placeholder="Zona do evento"
                list="list"
                autoComplete="off"
              ></S.Input>
            </S.ContentInput> */}
            {optionsList()}
            <S.Button type="submit">Buscar</S.Button>
          </S.Form>
        </FormProvider>
      </S.Content>
    </S.Wrapper>
  );
};
