import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout.jsx";
import MainPage from "./component/view/MainPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
