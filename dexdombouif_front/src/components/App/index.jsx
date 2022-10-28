import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "../../pages/Home";
import { Provider } from "react-redux";
import { store } from "../../redux/reducer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
