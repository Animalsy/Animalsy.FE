import "./App.css";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./navigation/rootRouter";

import { AppThemeProvider } from "./themes/themeProvider";

const App = () => {
  // const [trigger, result] = useLoginMutation();
  // useEffect(() => {
  //   trigger({ password: "12345", username: "test1" });
  // }, []);
  // useEffect(() => {
  //   console.log(result);
  // }, [result]);

  return (
    <AppThemeProvider>
      <div style={{ minHeight: "100dvh" }}>
        <RouterProvider router={rootRouter} />
      </div>
    </AppThemeProvider>
  );
};

export default App;
