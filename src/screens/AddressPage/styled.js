import styled from "styled-components";
import {TextField, Button} from "@material-ui/core";

export const FormContainer = styled.form`
  height: 640px;
  padding: 0 0 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextField)`
  width: 360px;
  height: 72px;
  margin: 58px 0 0;
  padding: 0 16px 8px;
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

export const ButtonSave = styled(Button)`
  width: 360px;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
`
