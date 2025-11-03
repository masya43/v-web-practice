// --- Простая "модель корзины" в localStorage ---
const CART_KEY = 'cartIds';

function loadCart() {
  try { return new Set(JSON.parse(localStorage.getItem(CART_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveCart(set) {
  localStorage.setItem(CART_KEY, JSON.stringify([...set]));
}
const cart = loadCart();

// --- Инициализация карточек согласно cart ---
function hydrateCartUI() {
  document.querySelectorAll('.add-btn').forEach(btn => {
    const id = btn.dataset.id;
    if (cart.has(id)) {
      btn.classList.add('is-in-cart');
      btn.textContent = 'В корзине';
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('is-in-cart');
      btn.textContent = 'Добавить в корзину';
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

// --- Тоггл корзины (делегирование событий) ---
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.add-btn');
  if (!btn) return;
  const id = btn.dataset.id;
  if (!id) return;

  if (cart.has(id)) {
    cart.delete(id);
  } else {
    cart.add(id);
  }
  saveCart(cart);
  hydrateCartUI();
});

// --- Поиск по data-title (регистронезависимый) ---
const searchInput = document.getElementById('searchInput');
const cards = [...document.querySelectorAll('.card')];

function applyFilter(q) {
  const needle = q.trim().toLowerCase();
  cards.forEach(card => {
    const title = (card.dataset.title || card.querySelector('h3')?.textContent || '').toLowerCase();
    const visible = needle === '' || title.includes(needle);
    card.style.display = visible ? '' : 'none';
  });
}

searchInput?.addEventListener('input', (e) => {
  applyFilter(e.target.value);
});

// --- Первая отрисовка ---
hydrateCartUI();
applyFilter('');
