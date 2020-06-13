import * as React from 'react';
import styled from 'styled-components/native';
import media from '../../../utils/styles/media';
const PageTemplateBlock = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.View`
  /* margin-top: 2rem; */
  flex-direction: row;
`;
export interface PageTemplateProps {}

type PageTemplateNamespace = {
  Main: typeof Main;
  Right: typeof Right;
};
const Main = styled.View`
  /* flex: 1; */
  width: 1440px;
  background-color: red;
  ${media.small} {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const Right = styled.View`
  width: 240px;
  background: skyblue;
  ${media.medium} {
    display: hidden;
  }
`;

const PageTemplate: React.FC<PageTemplateProps> & PageTemplateNamespace = ({
  children,
}) => {
  return (
    <PageTemplateBlock>
      <Wrapper>{children}</Wrapper>
    </PageTemplateBlock>
  );
};
PageTemplate.Main = Main;
PageTemplate.Right = Right;
export default PageTemplate;
