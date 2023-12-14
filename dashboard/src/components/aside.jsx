//import { useEffect } from "react"
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";




export default function Aside() {

    //useEffect(() => {
    //    fetch('http://localhost:3000')
    //}, [])

  return (
    <section className="h-full bg-zinc-800 rounded-l-xl text-white">
        <aside className="p-6 w-[300px]">
            <div className="mb-6 w-max">
                <a href="http://localhost:3000">
                    <img className="w-12 rounded-lg" src="/public/logoo.png" alt="MercadoArte logo" />
                </a>
            </div>
            <div className="mt-12">
                <h4 className="uppercase text-2xl font-medium">Menu</h4>
                <nav className="py-2">
                    <ul className="flex flex-col gap-2 w-max text-lg">
                        <li><a className="text-gray-300 hover:text-white duration-200 flex items-center gap-2" href="products"><FaShoppingCart /> Productos</a></li>
                        <li><a className="text-gray-300 hover:text-white duration-200 flex items-center gap-2" href="users"><FaUser /> Usuarios</a></li>
                        <li><a className="text-gray-300 hover:text-white duration-200 flex items-center gap-2" href="categorys"><BiSolidCategory /> Categorias</a></li>
                    </ul>
                </nav>
            </div>
        </aside>
    </section>
  )
}
