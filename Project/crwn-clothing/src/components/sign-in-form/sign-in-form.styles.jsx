// .sign-in-container {
//   display: 'flex';
//   flex-direction: 'column';
//   width: 380px;

//   h2 {
//     margin: 10px 0;
//   }

//   buttons-container {
//     display: flex;
//     justify-content: space-between;
//   }
// }

import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
