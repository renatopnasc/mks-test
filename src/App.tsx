import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default.ts";
import { GlobalStyles } from "./styles/global.ts";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}
