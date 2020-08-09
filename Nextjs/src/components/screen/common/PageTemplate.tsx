import * as React from 'react';

import styled from 'styled-components/native';

const PageTemplateBlock = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.View`
  /* margin-top: 2rem; */
  flex-direction: row;
`;

const Main = styled.View`
  flex: 1;
  width: 1440px;
  background-color: red;
`;

const Right = styled.View`
  width: 240px;
  background: skyblue;
`;

type PageTemplateNamespace = {
  Main: typeof Main;
  Right: typeof Right;
};

const PageTemplate: React.FC & PageTemplateNamespace = ({ children }) => {
  return (
    <PageTemplateBlock>
      <Wrapper>{children}</Wrapper>
    </PageTemplateBlock>
  );
};

PageTemplate.Main = Main;
PageTemplate.Right = Right;
export default PageTemplate;
