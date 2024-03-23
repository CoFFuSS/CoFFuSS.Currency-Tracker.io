/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import { Component, ErrorInfo, ReactNode } from 'react';

import { NavBar } from '@/components/NavBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { Container, PageContainer, PageWrapper, TextField } from './styled';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <PageWrapper>
          <PageContainer>
            <NavBar />
            <Header />
            <Container>
              <TextField>Opps something went wrong</TextField>
            </Container>
            <Footer />
          </PageContainer>
        </PageWrapper>
      );
    }

    return this.props.children;
  }
}
