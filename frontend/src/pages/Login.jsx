import React from "react";
import PropTypes from "prop-types";
import Auth from "../components/Auth";

function Login({ onAuthSuccess }) {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ background: "linear-gradient(to right, #f3e7e9, #e3eeff)" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl mb-4">Connexion</h1>
        <Auth onAuthSuccess={onAuthSuccess} isLogin />
      </div>
    </div>
  );
}

Login.propTypes = {
  onAuthSuccess: PropTypes.func.isRequired,
};

export default Login;
