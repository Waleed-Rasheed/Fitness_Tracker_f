import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Dashboard from "./pages/Dashboard.jsx";
import AddExercise from "./pages/Exercise/AddExercise.jsx";
import ViewExercise from "./pages/Exercise/ViewExercise.jsx";
import AddCategory from "./pages/category/AddCategory.jsx";
import ViewCategory from "./pages/category/ViewCategory.jsx";
import Nutrition from "./Pages/nutrition/Nutrition.jsx";
import Profile from "./Pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import AdminDb from "./pages/AdminDb.jsx";
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