import { useState } from 'react';

import { ArrowIcon, Container, Content, InnerText, TitleText, Wrapper } from './styled';

interface ExpandableFieldProps {
  title: string;
  content: JSX.Element;
}

export const ExpandableField = ({ title, content }: ExpandableFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Container onClick={handleToggle}>
        <TitleText>{title}</TitleText>
        <ArrowIcon />
      </Container>
      <Content isOpen={isOpen}>
        <InnerText>{content}</InnerText>
      </Content>
    </Wrapper>
  );
};
