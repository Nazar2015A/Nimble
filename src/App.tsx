import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import { HashRouter, Route, Routes } from "react-router-dom";
import ContactsListPage from "./pages/ContactsListPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="max-w-[1280px] w-full mx-auto mt-9">
          <Routes>
            <Route path="/" element={<ContactsListPage />} />
            <Route path="/contact/:id" element={<ContactPage />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
