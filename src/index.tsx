import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";
// import { darkTheme, lightTheme } from "./theme";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// 다른 형식이지만 실행 가능 함. (주석처리 된 부분) 17버젼이라 , 18버젼에서는 사용하지 말 것.
// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={darkTheme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );