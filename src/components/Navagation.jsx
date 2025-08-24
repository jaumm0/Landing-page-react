import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { User } from 'lucide-react';



function Navagation() {
return (
    <section className="flex justify-end px-10 items-center h-16  text-white bg-purple-800/70 ml-60"> 
        <nav className=''>
            <ul className="flex flex-row space-x-10">
                <li className="hover:bg-purple-400 p-2 rounded-full">
                    <Search />
                </li>
                <li className="hover:bg-purple-400 p-2 rounded-full">
                    <a href="/About"><ShoppingBag /></a>
                </li>
                <li className="hover:bg-purple-400 p-2 rounded-full">
                    <a href="/user"><User /></a>
                </li>
            </ul>
        </nav>
    </section>
);
}
export default Navagation;