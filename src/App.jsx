import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  return (
    <div className="min-h-screen w-full text-white bg-gray-950">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}
