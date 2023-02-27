import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(266, 266, 266, 0.4);

  display: flex;
  height: fit-content;
  padding: 20px;
  border-radius: 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fefefe;
  border-radius: 10px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  box-shadow: 4px 4px 15px 0px black;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #c41efb;
`;

export const Description = styled.p`
  font-size: 2rem;
  color: #c41efb;
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TitleInput = styled.h2`
  font-size: 1rem;
  color: #c41efb;
`;

export const Divider = styled.div`
  display: flex;
  width: 100%;
  height: 2px;
  border-radius: 10px;
  background-color: #c41efb;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  align-items: end;

  width: fit-content;
  height: fit-content;
  margin: auto;
`;

export const Input = styled.input`
  padding: 10px;
  border: solid 1px #cfcdcd;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  cursor: pointer;

  :focus {
    border-color: #c41efb;
    outline: none;
    transition: all 0.5s ease-in;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: #c41efb;
  color: #fefefe;

  :hover {
    background: #9e18cb;
    transition: all 0.2s ease-in;
  }
`;

export const Datalist = styled.datalist`
  display: none;
`;

export const Option = styled.option``;
