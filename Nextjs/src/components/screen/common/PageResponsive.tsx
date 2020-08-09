import React, { ReactElement } from 'react';

import styled from 'styled-components/native';

export type PageResponsiveProps = {
  className?: string;
  children: React.ReactNode;
};

const Block = styled.View`
  width: 1728px;
  height: 100%;
  background-color: ${({ theme }): string => theme.background};
`;

function PageResponsive({ children }: PageResponsiveProps): ReactElement {
  return <Block>{children}</Block>;
}

export default PageResponsive;
