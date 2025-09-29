import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "flowbite-react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import toast from "react-hot-toast";
import axios from "axios";
// import { auth } from "../../../server/middleware/auth";

export default function OAuth() {
  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const { email, password } = resultsFromGoogle.user;
      console.log(resultsFromGoogle);
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
        Navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <Button
      type="button"
      outline
      className="w-full mt-3 py-3 font-medium flex items-center justify-center gap-2 bg-white text-gray-700 rounded cursor-pointer hover:bg-gray-100 transition-all shadow"
      onClick={handleGoogleClick}
    >
      <FcGoogle className="w-5 h-5 mx-4" />
      Continue with Google
    </Button>
  );
}
