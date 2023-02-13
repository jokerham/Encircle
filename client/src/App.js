import './App.css';
import { Home } from './pages/portal/home/Home';
import { Layout } from './pages/portal/layout/Layout';
import { SignIn } from './pages/portal/layout/SignIn';
import { NoPage } from './pages/portal/layout/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
