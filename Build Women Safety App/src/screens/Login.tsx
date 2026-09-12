import { useState } from "react";
import type { Screen } from "../types";
import Logo from "../components/Logo";

export default function Login({ navigate }: { navigate: (s: Screen) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("home");
  };

  return (
    <div className="flex flex-col items-center px-8 py-10 bg-pink-grad" style={{ minHeight: "100dvh" }}>
      <div className="w-full max-w-sm fade-in">
        <div className="flex justify-center mb-6">
          <Logo size={80} />
        </div>
        <h2 className="text-2xl font-bold text-center mb-1" style={{ color: "#1C1B1F" }}>Welcome Back</h2>
        <p className="text-center text-sm mb-8" style={{ color: "#9E9E9E" }}>Log in to stay safe</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "#1C1B1F" }}>Email</label>
            <input
              className="input-neu"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: "#1C1B1F" }}>Password</label>
            <div className="relative">
              <input
                className="input-neu"
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: 48 }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#C0A0C0" }}
              >
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div className="text-right">
            <button type="button" className="text-sm font-semibold" style={{ background: "none", border: "none", color: "#E91E8C", cursor: "pointer" }}>
              Forgot Password?
            </button>
          </div>
          <button type="submit" className="btn-primary mt-2">Log In</button>
        </form>

        <p className="text-center text-sm mt-6" style={{ color: "#9E9E9E" }}>
          Don't have an account?{" "}
          <button onClick={() => navigate("register")} style={{ background: "none", border: "none", color: "#E91E8C", fontWeight: 600, cursor: "pointer" }}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
