import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import NotCreatedYet from "./pages/NotCreatedYet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<NotCreatedYet />} />
      <Route path="books" element={<Books />} />
      <Route path="books/:category/:id" element={<BookDetails />} />
      <Route path="*" element={<NotCreatedYet />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
