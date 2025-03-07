import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Input } from "../../components/Input";
import { FormEvent, useState } from "react";

export function Login() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log({ email
    , password });
  }
  
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-80 h-40 mb-7 mt-11" />
      </Link>

      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
        <Input 
          placeholder="Digite o seu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Digite a sua senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="h-9 bg-purple-800 rounded border-0 text-lg font-medium text-white"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
