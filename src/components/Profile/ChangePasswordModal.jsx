import React from "react";
import { FaTimes } from "react-icons/fa";

const ChangePasswordModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">

      <div className="bg-gray-900 w-full max-w-md p-6 rounded-2xl">

        <div className="flex justify-between">
          <h2 className="text-orange-400 font-bold">Change Password</h2>
          <FaTimes onClick={onClose} className="cursor-pointer" />
        </div>

        <input className="w-full mt-4 p-2 bg-black/40 rounded" placeholder="Old Password" />
        <input className="w-full mt-2 p-2 bg-black/40 rounded" placeholder="New Password" />

        <button className="w-full mt-4 bg-orange-400 text-black py-2 rounded">
          Update Password
        </button>

      </div>

    </div>
  );
};

export default ChangePasswordModal;