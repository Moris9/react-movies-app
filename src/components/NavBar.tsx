export default function NavBar() {
  return (
    <header className="flex justify-between px-3 py-2">
      <a
        href="#!"
        className="text-4xl font-medium border-2 border-green-400 px-2 pb-1 rounded-md"
      >
        R<span className="font-extrabold text-green-400">O</span>
        <span className="font-extrabold text-orange-400">_</span>
        <span className="font-extrabold text-green-400">O</span>M
      </a>
    </header>
  );
}