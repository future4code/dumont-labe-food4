import styled from "styled-components";
import {TextField} from "@material-ui/core";

export const FormContainer = styled.form`
  height: 100%;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextField)`
  width: 380px;
  height: 72px;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  width: 296px;
  height: 20px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;

export const ButtonSave = styled.button`
  display: block;
  width: 380px;
  height: 45px;
  font-size: 18px;
  padding: 12px 16px;
  border-radius: 3px;
  border: none;
  background-color: #5cb646;
  margin: auto;
`
