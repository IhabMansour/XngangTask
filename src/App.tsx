import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import NotCreatedYet from "./pages/NotCreatedYet";
import { useState } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="books" element={<Books />} />
      <Route path="books/:id" element={<BookDetails />} />
      <Route path="*" element={<NotCreatedYet />} />
    </Route>
  )
);

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1500);
  }

  return !loading ? <RouterProvider router={router} /> : <></>;
}

export default App;
