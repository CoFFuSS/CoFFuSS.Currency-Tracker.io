import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { UpdateTime } from '@/components/UpdateTime';

import { PageContainer, PageWrapper } from './styled';

export const BasicLayout = () => (
  <PageWrapper>
    <PageContainer>
      <NavBar />
      <Header />
      <UpdateTime />
      <Outlet />
      <Footer />
    </PageContainer>
  </PageWrapper>
);
