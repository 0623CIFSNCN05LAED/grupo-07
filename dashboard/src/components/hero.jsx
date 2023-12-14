
export default function Hero() {
  return (
    <main className="bg-zinc-900 text-white w-full p-6 rounded-r-xl">
        <header className="flex items-center justify-between animate-fade animate-duration-[2000ms] animate-ease-in-out">
            <h1 className="text-3xl font-semibold">Bienvenido, user</h1>
            <div>
                <form action="">
                    <input className="border-2 border-gray-500 outline-none text-black px-4 py-1 rounded-full" type="text" name="search" placeholder="Buscar dashboard.." />
                </form>
            </div>
        </header>
    </main>
  )
}
