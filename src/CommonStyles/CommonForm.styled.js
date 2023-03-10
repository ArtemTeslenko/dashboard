import styled from "styled-components";

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 48px;
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.6;
  background-color: transparent;
  color: #ffffff;
  outline: none;
  border: 1px solid #3d4250;
  border-radius: 8px;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &:last-of-type {
    margin-bottom: 48px;
  }
`;

export { FormBox, FormInput };
