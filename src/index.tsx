import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/App';

async function enableMocking() {
  const { worker } = await import('./mocks/browser');

  return worker.start({
    findWorker(scriptUrl) {
      return scriptUrl.includes('mockServiceWorker');
    },
  });
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

enableMocking().then(() => {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
});
