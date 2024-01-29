import "./App.css";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./navigation/rootRouter";

import { AppThemeProvider } from "./themes/themeProvider";

function App() {
  return (
    <AppThemeProvider>
      <div style={{ minHeight: "100dvh" }}>
        <RouterProvider router={rootRouter} />
      </div>
    </AppThemeProvider>
  );
}

export default App;
