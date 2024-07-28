import styled, { createGlobalStyle, css } from 'styled-components';








export const initalState = {
  name: '',
  email: '',
  message: '',
  service: '',
  website: ''
};


const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    /*font-family: Arial, Helvetica, sans-serif;*/
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  /*
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
  */
`;

export const ConnectContainer = styled.div`
  display: flex;
  align-items: center;  // Centers children vertically
  justify-content: center;  // Centers children horizontally
  height: 100vh;  // Takes full viewport height
 // padding: 0 20px;
  position: relative;  // Provides a positioning context
  overflow-x: hidden;
`;

export const ConnectForm = styled.form`
  width: 100%;
  min-width: 700px;
  transform: scale(0.5);
 // min-height: 600px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: flex;

  flex-direction: column;  // Ensures the form fields are stacked vertically
  align-items: left;  // Centers the form fields horizontally
  color: #fff;  // Text color
`;


export const ConnectInput = styled.input`
  display: block;
  width: 100%;
  color: #000;

  ${sharedStyles}
`;

export const ConnectTextArea = styled.input`
  background-color: #eee;
  width: 100%;
  color: #000;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
export const ConnectButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const ConnectFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #fff;
  padding: 20px;
  line-height: 25px;
  margin: 20px 0;
  legend {
    padding: 0 20px;
    color: #fff;
  }
  label {
    padding-right: 20px;
    color: #fff;
  }
  input {
    margin-right: 10px;
    color: #fff;
  }
`;

export const ConnectError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;


export const ContactImg = styled.img`
    top: 20%;
    left: 0%;
    height: 250px;
    width: 300px;
    align-items: center;
    justify-content: center;
background-repeat: no-repeat;
background-size: cover;
    position: fixed;
    z-index: 99999;
    border-top: 3px solid transparent;
    border-radius: 25px;
  // background-image: url('../../images/cthulu.gif');
    @media screen and (max-width: 850px) {
    align-items: center;
        display:block;
    position: absolute;
    left: 150%;


}
`;


export const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;  // Adjust height as necessary
  overflow: hidden;
`;
