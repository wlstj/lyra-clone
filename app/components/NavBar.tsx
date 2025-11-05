export default function NavBar() {
  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center border-b border-neutral-200">
      <div className="font-semibold text-xl">Lyra Clone</div>

      <div className="flex gap-6">
        <a href="#" className="text-sm hover:opacity-70">Product</a>
        <a href="#" className="text-sm hover:opacity-70">Resources</a>
        <a href="#" className="text-sm hover:opacity-70">Pricing</a>
      </div>

      <button className="px-6 py-2 rounded-md bg-black text-white text-sm">
        Login
      </button>
    </nav>
  );
}
