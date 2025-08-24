function FrontPage() {
  return (
<section className="bg-purple-800/70 fixed top-0 left-0 w-60 h-screen border-r-2 border-r-purple-400">
  <div>
    <h1 className="text-white text-2xl font-sans pb-10 ml-2 p-10"><a href="/Home">Store Uz</a></h1>
    <ul className="text-white text-2xl font-sans flex flex-col space-y-2 px-10 pb-10">
      <li className="hover:bg-purple-400 transition delay-60 duration-200 hover:translate-x-2 p-2 rounded-lg">
        <button>PROMOÇÕES</button>
      </li>
      <li className="hover:bg-purple-400 transition delay-60 duration-200 hover:translate-x-2 p-2 rounded-lg">
        <button><a href="/MouseArea">Mouses</a></button>
      </li>
      <li className="hover:bg-purple-400 transition delay-60 duration-200 hover:translate-x-2 p-2 rounded-lg">
        <button>MousePads</button>
      </li>
      <li className="hover:bg-purple-400 transition delay-60 duration-200 hover:translate-x-2 p-2 rounded-lg">
        <button>Teclados</button>
      </li>
      <li className="hover:bg-purple-400 transition delay-60 duration-200 hover:translate-x-2 p-2 rounded-lg">
        <button>Headsets</button>
      </li>
      <li className="hover:bg-purple-400 transition delay-60 duration-200 hover:translate-x-2 p-2 rounded-lg">
        <button>Manguitos</button>
      </li>
      <li className="hover:bg-purple-400 transition delay-60 duration-200 hover:translate-x-2 p-2 rounded-lg">
        <button>Controles</button>
      </li>
    </ul>
  </div>
</section>

  );
}

export default FrontPage;
