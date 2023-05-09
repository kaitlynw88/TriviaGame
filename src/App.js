import NavBar from "./components/NavBar";
import TriviaList from "./components/TriviaList";
import { AuthContextProvider } from "./components/auth/AuthContext";
import SignIn from "./components/auth/SignIn";
import {HomePage} from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import Protected from "./components/Protected";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
          <AuthContextProvider>
              <NavBar />
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route
                      path="/account"
                      element={
                          <Protected>
                              <AccountPage />
                          </Protected>
                      }
                  />
                  <Route
                      path="/trivia"
                      element={
                          <Protected>
                              <TriviaList />
                          </Protected>
                      }
                  />
              </Routes>
          </AuthContextProvider>
      </div>
  );
}

export default App;
