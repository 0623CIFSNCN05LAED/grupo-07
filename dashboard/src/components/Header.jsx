export default function Header() {
  return (
    <header className="flex items-center justify-between p-4  border-b border-neutral-700">
      <h1>Bienvenido a MercadoArte!</h1>
      <form>
        <input
          className="bg-neutral-950 py-1 px-3 rounded-xl border border-neutral-700"
          type="text"
          name="search"
          placeholder="Buscar dashboard..."
        />
      </form>
    </header>
  );
}
