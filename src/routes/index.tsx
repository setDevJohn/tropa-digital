import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  </BrowserRouter>
)