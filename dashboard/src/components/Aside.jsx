import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logoo.png";

const links = [
  { name: "Dashboard", path: "/" },
  {
    name: "Usuarios",
    path: "/usuarios",
  },
  { name: "Productos", path: "/productos" },
  {
    name: "Categorias",
    path: "/categorias",
  },
];

export default function Aside() {
  return (
    <aside className="fixed left-0 flex flex-col items-center justify-between py-4 border-r border-neutral-700 h-screen w-[220px]">
      <div>
        <Link className="flex gap-1" href="/">
          <Image
            className="w-auto h-auto"
            src={logo}
            alt="Logo"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            MercadoArte
            <span>Dashboard</span>
          </div>
        </Link>
      </div>
      <nav className="text-xl">
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button className="text-xl">Cerrar sesion</button>
      </div>
    </aside>
  );
}
