import "./App.css";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./navigation/rootRouter";

import { AppThemeProvider } from "./themes/themeProvider";
import { GlobalStyle } from "./themes/globalStyle";

function App() {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <div style={{ minHeight: "100dvh" }}>
        <RouterProvider router={rootRouter} />
      </div>
    </AppThemeProvider>
  );
}

export default App;
