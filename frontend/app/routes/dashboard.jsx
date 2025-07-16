import ProtectedRoute from "../components/ProtectedRoute";
import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (u) setUser(u);
    });
    return () => unsub();
  }, []);

  return (
    <ProtectedRoute>
      {user ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-cyan-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-2 text-purple-700">Welcome!</h2>
            <p className="text-gray-700 mb-6">{user.email}</p>
            <button
              onClick={() => {
                auth.signOut();
                navigate("/login");
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <span className="text-gray-500 text-lg">Loading...</span>
        </div>
      )}
    </ProtectedRoute>
  );
}