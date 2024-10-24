import { RouterProvider } from 'react-router-dom';
import { routes } from './views/routes';
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/query-core';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
      retry: false,
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
