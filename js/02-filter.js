const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 * fuse.js * fusejs.io - библиотека для контроля набора текста с ошибками
 */

const refs = {
  input: document.querySelector('#filter'),
    list: document.querySelector('.js-list'),
};

// 1.section
function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('')
};
const listItemsMarkup = createListItemsMarkup(tech);
// если родительский узел пуст, по можно использовать innerHTML вместо insertAjactedHTML
populateList(listItemsMarkup);

// 2. & 3.section
refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();
  const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));
  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
};
function populateList(markup) {
  refs.list.innerHTML = markup
};