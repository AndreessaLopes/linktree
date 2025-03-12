import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { db } from "../../services/firebaseConnection";
import {setDoc, getDoc, doc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() != undefined) {
            setFacebook(snapshot.data()?.facebook);
            setInstagram(snapshot.data()?.instagram);
            setWhatsapp(snapshot.data()?.whatsapp);
          }
        })
        .catch((error) => {
          console.error("ERRO AO BUSCAR " + error);
        });
    }
    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      whatsapp: whatsapp,
    })
      .then(() => {
        console.log("CADASTRADO COM SUCESSO");
      })
      .catch((error) => {
        console.error("ERRO AO SALVAR " + error);
      });
  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do Facebok
        </label>
        <Input
          placeholder="Digite a url do facebook"
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do Instagram
        </label>
        <Input
          placeholder="Digite a url do instagram"
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do WhatsApp
        </label>
        <Input
          placeholder="Digite a url do whatsapp"
          type="url"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-purple-800 h-9 rounded-md items-center justify-center flex mb-7"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
}
