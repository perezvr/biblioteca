
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  font-family: Arial, Helvetica, sans-serif;

  h1 {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-content: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin: 5px auto;  
  border-radius: 4px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #296291;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    & + input {
      margin-top: 5px;
    }
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  color: #FFF;
  font-size: 16px;
  border: 0;
  background: #296291;
  padding: 0 15px;
  height: 40px;
  border-radius: 4px;
  margin-top: 20px;

  display: flex;
  flex: ontent;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;