export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <header className="sticky top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <h1 className="text-xl font-bold">MiniShop</h1>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-sky-400">
              Каталог
            </a>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Каталог</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            { name: "Кружка керамическая", price: 490 },
            { name: "Тарелка глубокая", price: 390 },
            { name: "Стакан стеклянный", price: 290 },
          ].map((p) => (
            <div key={p.name} className="bg-slate-800 p-4 rounded-xl">
              <h3 className="font-medium mb-2">{p.name}</h3>
              <p className="text-sky-400 font-semibold mb-2">{p.price} ₽</p>
              <button className="px-4 py-2 bg-sky-600 rounded-md hover:bg-sky-500">
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-700 mt-10 py-4 text-center text-sm text-slate-400">
        © 2025 MiniShop. Все права защищены.
      </footer>
    </div>
  );
}
