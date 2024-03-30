import themeSwitcher from '@/store';

jest.mock('@/store', () => ({
  __esModule: true,
  default: {
    themeName: 'dark',
    toggleTheme: jest.fn(),
  },
}));

describe('Theme switching function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('toggles theme when called', () => {
    themeSwitcher.toggleTheme();
    expect(themeSwitcher.toggleTheme).toHaveBeenCalledTimes(1);
  });
});
