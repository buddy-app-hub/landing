import Image from "next/image";
import BuddyLogo from "@/assets/buddy_logo.svg";

export default function Footer() {
    return (
        <footer className="bg-transparent py-6 w-full">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-lg font-bold">
                            <Image
                                priority
                                src={BuddyLogo}
                                alt="buddy"
                                width={100}
                            />
                        </h2>
                    </div>
                    {/*<div className="mt-4 md:mt-0">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="hover:text-blue-400 transition">Inicio</a>
                            </li>
                            <li>
                                <a href="#features" className="hover:text-blue-400 transition">Cómo Funciona</a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:text-blue-400 transition">Testimonios</a>
                            </li>
                            <li>
                                <a href="#partners" className="hover:text-blue-400 transition">Colaboraciones</a>
                            </li>
                        </ul>
                    </div>*/}
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm">© 2024 Buddy. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
/* items-center justify-center*/
/*
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">Buddy</h2>
            <p className="mt-1 text-sm">Conectando generaciones.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-400 transition">Inicio</a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition">Cómo Funciona</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition">Testimonios</a>
              </li>
              <li>
                <a href="#partners" className="hover:text-blue-400 transition">Colaboraciones</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">© 2024 Buddy. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Instagram</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>*/

/*      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>*/