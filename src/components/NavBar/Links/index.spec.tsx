/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import themeSwitcher from '@/store';

import { LinkElement } from '.';

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={themeSwitcher.theme}>
          <LinkElement />
        </ThemeProvider>
      </MemoryRouter>,
    );

    const homeLink = screen.getByText('Home');
    const timelineLink = screen.getByText('TimeLine');
    const bankCardLink = screen.getByText('BankCard');
    const contactLink = screen.getByText('Contact');

    expect(homeLink).toBeInTheDocument();
    expect(timelineLink).toBeInTheDocument();
    expect(bankCardLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});

export {};
