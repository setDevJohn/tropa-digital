import styled from 'styled-components';

export const Title = styled.h1<{$small?: boolean}>`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme, $small }) => $small ? theme.subtitle : theme.title};
  font-weight: ${({ $small }) => $small ? 500 : 700};
  width: fit-content;
`;

export const Text = styled.p<{$color?: string; $opacity?: number; $weight?: number}>`
  color: ${({ $color }) => $color ? $color : '#000'};
  opacity: ${({ $opacity }) => $opacity ? $opacity : 1};
  font-weight: ${({ $weight }) => $weight && $weight};
  width: fit-content;
`;

export const StyledImage = styled.img<{ $width?: string, $height?: string}>`
  width: ${({ $width }) => $width && $width};
  height: ${({ $height }) => $height && $height};
`;