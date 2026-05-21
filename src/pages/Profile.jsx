import React, { useEffect, useState } from "react";
import { FaEdit, FaEnvelope, FaMapMarkerAlt, FaLock, FaSignOutAlt } from "react-icons/fa";
import EditProfileModal from "../components/Profile/EditProfileModal";
import ChangePasswordModal from "../components/Profile/ChangePasswordModal";
import API from "../api/auth"; 

const Profile = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openPass, setOpenPass] = useState(false);

  const [profile, setProfile] = useState(null);


  useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await API.get("/profile");
      setProfile(res.data.user);
    } catch (err) {
      console.log(err.message);
    }
  };

  fetchProfile();
}, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/home";
  };

  if (!profile) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  const bmi =
    profile.weight / ((profile.height / 100) ** 2 || 1);

  const bmiStatus =
    bmi < 18.5
      ? "Underweight"
      : bmi < 24.9
      ? "Normal"
      : bmi < 29.9
      ? "Overweight"
      : "Obese";

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">

      <div className="max-w-5xl mx-auto space-y-6">

        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6">

          <button
            onClick={() => setOpenEdit(true)}
            className="absolute top-3 right-3 bg-orange-400 text-black px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold"
          >
            <FaEdit /> Edit
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-6">

            <img
              src={profile.profile ||"https://as2.ftcdn.net/jpg/03/55/72/07/1000_F_355720743_3GQv9QBh9uyBVGO25npy9iYODrTBa3wU.jpg"}
              className="w-28 h-28 rounded-full border-4 border-orange-400"
            />

            <div>

              <h1 className="text-2xl font-bold text-orange-400">
                {profile.name}
              </h1>

              <p className="flex items-center gap-2 text-gray-300">
                <FaEnvelope /> {profile.email}
              </p>

              <p className="flex items-center gap-2 text-gray-300">
                <FaMapMarkerAlt /> {profile.location || "Not set"}
              </p>

              <p className="text-gray-400 text-sm mt-2">
                {profile.bio || "No bio"}
              </p>

            </div>
          </div>
        </div>

      
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

          <Box label="Workouts" value={profile.workouts || 0} />
          <Box label="Calories" value={profile.calories || 0} />
          <Box label="Minutes" value={profile.minutes || 0} />
          <Box label="Streak" value={profile.streak || 0} />

        </div>

 
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5">

          <h2 className="text-gray-400 mb-4">Body Analysis</h2>

          <div className="grid grid-cols-3 text-center gap-2">

            <Mini label="Age" value={profile.age || "-"} />
            <Mini label="Height" value={`${profile.height || 0} cm`} />
            <Mini label="Weight" value={`${profile.weight || 0} kg`} />

          </div>

          <div className="mt-6 text-center">
            <h1 className="text-3xl text-orange-400">
              {bmi.toFixed(1)}
            </h1>
            <p className="text-gray-300">{bmiStatus}</p>
          </div>

        </div>

    
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 flex justify-between items-center">

          <p>Security Settings</p>

          <button
            onClick={() => setOpenPass(true)}
            className="bg-orange-400 text-black px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <FaLock /> Change Password
          </button>

        </div>

        <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-5 flex justify-between items-center">

          <p className="text-red-300">Logout</p>

          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <FaSignOutAlt /> Logout
          </button>

        </div>

      </div>

    
      <EditProfileModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        profile={profile}
        setProfile={setProfile}
      />

      <ChangePasswordModal
        open={openPass}
        onClose={() => setOpenPass(false)}
      />

    </div>
  );
};


const Box = ({ label, value }) => (
  <div className="bg-white/5 p-3 rounded-xl text-center">
    <p className="text-gray-400 text-xs">{label}</p>
    <h3 className="text-lg">{value}</h3>
  </div>
);

const Mini = ({ label, value }) => (
  <div>
    <p className="text-gray-400 text-xs">{label}</p>
    <h3>{value}</h3>
  </div>
);

export default Profile;