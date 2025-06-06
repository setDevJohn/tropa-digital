import styled from 'styled-components';

export const Text = styled.p`
  line-height: 1.6;
`;

export const StyledImage = styled.img<{ $width?: string, $height?: string}>`
  width: ${({ $width }) => $width && $width};
  height: ${({ $height }) => $height && $height};
`;