"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          firstName,
          lastName,
          email,
          phone,
          profilePicture: "", // kosong dulu, bisa ditambahin nanti
          subscriptionPlan: "rookie", // default plan
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registrasi gagal");
        return;
      }

      alert("Registrasi berhasil!");
      router.push("/login");
    } catch (error) {
      console.error("Register Error:", error);
      alert("Terjadi kesalahan saat registrasi");
    }
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[url('/bg-logreg.png')] bg-cover bg-center relative overflow-hidden">
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Greeting */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-md">
            <h1 className="text-6xl lg:text-7xl font-bold text-warmBrown-800 mb-4 font-serif italic">Holla!</h1>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">Beauty Smarter,</p>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">Style Better</p>
          </div>
        </div>

        {/* Register Form */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-16">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <div className="text-[35px] font-normal whitespace-nowrap text-center uppercase tracking-[1.93px] leading-[1.2] mt-[5px] text-primary font-port-lligat">
                Glammuse
              </div>
            </div>

            <h3 className="text-4xl font-bold text-warmBrown-800 text-center mb-8 font-serif">Register</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <div className="text-center py-2">
                <span className="text-warmBrown-600 text-sm">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={handleLoginClick}
                    className="text-warmBrown-800 font-semibold hover:text-warmBrown-900 underline"
                  >
                    Login
                  </button>
                </span>
              </div>

              <Button type="submit" className="w-full text-white">
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
