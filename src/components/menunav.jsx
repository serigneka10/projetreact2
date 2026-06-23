import { Link } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [kaOpen, setKaOpen] = useState(false);

  return (
    <>
      <nav
        className="bg-black shadow-lg"

      >
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="h-10 w-auto" src="/assets/logo.png" alt="Logo" />
            <span className="font-bold tracking-tight">Virtual</span>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-6">
              <li><a href="#">Accueil</a></li>
              <li><a href="#apropos">À propos</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="flex gap-3">
              <Link to="/login">
                <button
                  className="px-4 py-1 border rounded-md cursor-pointer">
                  Sign up
                </button>
              </Link>
              <button className="px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">
                Create an account
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-3xl"
            onClick={() => setKaOpen(!kaOpen)}
          >
            {kaOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {kaOpen && (
        <div className="md:hidden bg-zinc-600 p-4 rounded-lg ">
          <ul className="flex flex-col justify-center items-enter ml-32 gap-4">
            <li><a href="#">Accueil</a></li>
            <li><a href="#apropos">À propos</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="flex flex-col gap-3 mt-4">
            <a
              href="/signup"
              className="px-4 py-2 border rounded-md inline-block cursor-pointer"
            >
              Sign up
            </a>

            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">
              Create an account
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;