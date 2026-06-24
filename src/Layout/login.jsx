import { Eye } from "lucide-react"


function PageLogin() {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">

  {/* Image */}
  <div className="hidden md:block md:w-1/2 h-screen">
    <img
      src="/assets/user1.jpg"
      alt="Illustration"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Formulaire */}
  <div className="w-full md:w-1/2 h-screen flex justify-center items-center p-4">
    <div className="w-full max-w-md">

      {/* Logo */}
      <div className="flex justify-center items-center gap-3">
        <img
          className="h-14 w-14"
          src="/assets/logo.png"
          alt="Logo"
        />
        <p className="font-bold text-xl">Virtual</p>
      </div>

      {/* Titre */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-4">
        Bon retour
      </h1>

      <p className="text-neutral-600 text-center mt-2">
        Connectez-vous pour accéder à votre espace développeur
      </p>

      {/* Formulaire */}
      <form className="flex flex-col gap-3 mt-6">

        <div>
          <label htmlFor="email" className="font-medium">
            Adresse e-mail
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="vous@exemple.com"
            className="w-full border p-3 rounded-lg mt-1 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="password" className="font-medium">
            Mot de passe
          </label>

          <div className="relative mt-1">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Mot de passe"
              className="w-full border p-3 pr-10 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
            />

            <Eye className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Se souvenir de moi</span>
          </label>

          <a
            href="#"
            className="text-orange-600 hover:underline"
          >
            Mot de passe oublié ?
          </a>
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-medium transition"
        >
          Se connecter
        </button>

        <div className="text-center mt-2">
          <p className="text-gray-600">
            Pas encore de compte ?
          </p>

          <a
            href="#"
            className="text-orange-600 font-semibold hover:underline"
          >
            Créer un compte
          </a>
        </div>

      </form>
    </div>
  </div>

</div>
  )
}
export default PageLogin;