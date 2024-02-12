import ThemeProvider from "./shared/theme/ThemeProvider";
import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
