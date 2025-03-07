import { Social } from "../../components/Social";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        Rosângela Lopes
      </h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a href="#"><p className="text-base md:text-lg">Canal no Youtube</p></a>
        </section>

        <footer className="flex justify-center gap-3 my-4">
          <Social url="https://www.facebook.com/Dessa.L.Assis" >
            <FaFacebook size={35} color="white"/>
          </Social>
          <Social url="https://www.instagram.com/rosangelalopesterapeuta/" >
            <FaInstagram size={35} color="white"/>
          </Social>
          <Social url="https://api.whatsapp.com/send?phone=5537999732842" >
            <FaWhatsapp size={35} color="white"/>
          </Social>
        </footer>
      </main>
    </div>
  );
}