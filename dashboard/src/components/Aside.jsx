import { FaRegUser } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";


const links = [
    { name: 'Dashboard', path: 'dashboard', icon: <MdOutlineSpaceDashboard /> },
    { name: 'Usuarios', path: 'users', icon: <FaRegUser /> },
    { name: 'Productos', path: 'products', icon: <LuShoppingBag /> },
    { name: 'Categorias', path: 'category', icon: <BiCategory /> },
]

export default function Aside() {
    const [activeNav, setActiveNav] = useState(0)
  return (
    <aside className="h-screen max-w-[290px] border-r">
        <div className="h-full flex flex-col items-center justify-between py-20">
            <div className="flex flex-col items-center">
                <div>
                    <a className="flex gap-2 items-center" href="/"><img className="max-w-[60px]" src="/logo1.jpg" alt="logo" />
                    <div className="flex flex-col font-medium">
                        <h4 className="text-xl">MercadoArte</h4>
                        <span>Dashboard</span>
                    </div>
                    </a>
                </div>
                <nav className="mt-32">
                <ul className="flex flex-col gap-6">
                    {links.map(link => (
                        <li key={link.name}>
                            <a href={link.path}>
                                <div className={"flex items-center gap-3 text-xl font-medium" + (activeNav === link.name ? "bg-gray-600" : '')} onClick={() => setActiveNav(link.name)}>
                                    {link.icon}
                                    {link.name}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                </nav>
            </div>
            <div className="text-xl font-medium">
                <button className="flex items-center gap-3"><IoLogOutOutline /> Cerrar sesion</button>
            </div>
        </div>
    </aside>
  )
}
