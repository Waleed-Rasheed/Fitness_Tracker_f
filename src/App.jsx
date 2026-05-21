import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import AddExercise from "./pages/Exercise/AddExercise";
import ViewExercise from "./pages/Exercise/ViewExercise";
import AddCategory from "./pages/category/AddCategory";
import ViewCategory from "./pages/category/ViewCategory";
import Nutrition from "./Pages/nutrition/Nutrition";
import Profile from "./Pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AdminDb from "./pages/AdminDb";
import ProtectRoute from "./routes/ProtectedRoute";

const App=()=> {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

        <Route
    path="/admin"
    element={
      <ProtectRoute roles={["admin"]}>
        <AdminDb />
      </ProtectRoute>
    }
  />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/exercise/add" element={<AddExercise />} />
          <Route path="/exercise/view" element={<ViewExercise />} />

          <Route path="/category/add" element={<AddCategory />} />
          <Route path="/category/view" element={<ViewCategory />} />

          <Route path="/nutrition" element={<Nutrition />} />

          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

export default App;