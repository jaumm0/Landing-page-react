import StoreItem from "./components/StoreItem";
import Navagation from "./components/Navagation";   
import FrontPage from "./components/Frontpage";
import Carousel from "./components/Carousel";
import BestSellingItem from "./components/BestSellingItem";



function App() {
  return (
    
      <body className="bg-purple-700/70  ">
        
      
    <section className=" h-screen w-[176] flex">
      {/* Sidebar */}
      <aside className="flex border-r-3 border-white-400">
        <FrontPage />
      </aside>

      {/* Área da direita: navbar + conteúdo */}
      <div className="flex-1 flex flex-col w-[174vh] ">
        {/* Navbar */}
        <nav className="">
          <Navagation />
        </nav>

        {/* Store ocupando toda a largura abaixo do navbar */}
        <section className="w-[174vh] ml-60 p-1">
          <Carousel className="" />
          {/* Adicione outros componentes aqui, se necessário */}
        </section> 
        <main className="">
            <StoreItem />
            <BestSellingItem />
            </main>
 
       
      </div>
    </section>
    </body>
  );
}
// Mova o bloco do "Store" para o meio, entre FrontPage/Navagation e o bloco vazio

export default App;