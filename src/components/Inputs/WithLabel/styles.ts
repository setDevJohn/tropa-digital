import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 600;
`;