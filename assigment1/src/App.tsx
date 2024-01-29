import ThemeProvider from "./shared/theme/ThemeProvider";
import GlobalStyles from "./styles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

function App() {
  const [userInput, setUserInput] = useState("");
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }
  return (
    <ThemeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
