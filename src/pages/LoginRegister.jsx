
import { ChevronRight, ChevronLeftIcon, Trash2Icon } from "lucide-react";
import FrontPage from "../components/Frontpage";  


function LoginRegister() {
  
  return (
    
    <section className="bg-purple-700/70 h-screen flex flex-col ml-60 ">
      <FrontPage />
      <section className="flex flex-col pl-10 pt-8 text-white ">
        <h2 className="font-sans text-[2vh] h-[5vh] items-center flex ">Inicio-Minha conta - Cadastre-se </h2>
        <h1 className="font-sans text-[3vh] h-[5vh] items-center flex ">Cadrastre-se</h1>
        <p className="font-sans text-[2vh] h-[5vh] items-center flex ">Compre mais rapido e acompanhe seus pedidos em um so lugar</p>
          <div className="flex flex-col space-y-4  rounded-md mt-2 bg-purple-400/70 p-6 w-[50vh]">
            <h2 className="font-sans text-[2vh]">
              Nome Completo
            </h2>
              <input type="text" name="" id=""placeholder="ex: Joao victor " className="pl-3 rounded-md h-[5vh] text-purple-950 outline-none " />
            <h2 className="">
              Email
            </h2>
              <input type="email" name="" id=""placeholder="ex: uz@gmail.com" className="pl-3 rounded-md h-[5vh] text-purple-950 outline-none "  />
            <h2 className="font-sans text-[2vh]">
              Senha
            </h2>
              <input type="password" name="" id=""className="pl-3 rounded-md h-[5vh] text-purple-950 outline-none "  />
            <h2 className="font-sans text-[2vh]">
              Confirmar Senha
              </h2>  
              <input type="password" name="" id="" className="pl-3 rounded-md h-[5vh] text-purple-950 outline-none "  />
            <button className="bg-purple-500 text-white  py-2 rounded hover:bg-purple-600 transition duration-200">
              Cadastre-se
              </button>
          </div>
      </section>
    </section>
  );
}   
export default LoginRegister;