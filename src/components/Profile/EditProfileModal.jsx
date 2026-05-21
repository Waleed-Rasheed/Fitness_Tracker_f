import React, { useState, useEffect } from "react";
import API from "../../api/auth.js";

const EditProfileModal = ({ open, onClose, profile, setProfile }) => {
  const [form, setForm] = useState({
    name: "",
    location: "",
    bio: "",
  });

  useEffect(() => {
    if (profile) {
      setForm(profile);
    }
  }, [profile]);

  if (!open) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    try {
      const res = await API.put("/update", form);

      setProfile(res.data.user);
      onClose();
    } catch (err) {
      alert("Update failed");
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-gray-900 p-5 rounded-xl w-80 space-y-3">
        <h2 className="text-orange-400">Edit Profile</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 bg-black"
          placeholder="Name"
        />

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-2 bg-black"
          placeholder="Location"
        />

        <input
          name="bio"
          value={form.bio}
          onChange={handleChange}
          className="w-full p-2 bg-black"
          placeholder="Bio"
        />

        <button
          onClick={handleSave}
          className="bg-orange-400 w-full py-2 text-black"
        >
          Save
        </button>

        <button onClick={onClose} className="text-gray-400 w-full">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default EditProfileModal;