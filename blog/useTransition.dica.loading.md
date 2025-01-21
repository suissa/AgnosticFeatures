# useTransition()

Hoje irei falar sobre o `useTransition()`, ele deveria ser usado com mais frequencia,
pois ele nos permite marcar atualizações de estado como transições, muito útil para indicar *loading states* em atualizações lentas. tendo em vista que ele
não bloqueia a UI durante essas atualizações pesadas

Exemplo:
```tsx
function SearchPage() {
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState('');

  const handleSearch = (newQuery) => {
    // Marca a busca como uma transição
    startTransition(() => {
      setQuery(newQuery); // Atualização pesada
    });
  };

  return (
    <div>
      <input onChange={(e) => handleSearch(e.target.value)} />
      {isPending ? <Spinner /> : <SearchResults query={query} />}
    </div>
  );
}
```
Principais diferenças:

useEvent: Para otimizar funções que não precisam ser reativas
useDeferredValue: Para adiar atualizações menos importantes
useTransition: Para marcar e gerenciar atualizações lentas com estados de loading

Então ela nos ajuda a gerenciar atualizações pesadas de forma mais suave.

Olhe mais alguns exemplos.

Filtragem de uma lista grande:

```js
function FilterableList({ items }) {
  const [isPending, startTransition] = useTransition();
  const [filterText, setFilterText] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (text) => {
    // Atualização imediata do input
    setFilterText(text);
    // Filtragem como transição
    startTransition(() => {
      setFilteredItems(
        items.filter(item => 
          item.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    });
  };

  return (
    <div>
      <input 
        value={filterText}
        onChange={e => handleFilter(e.target.value)}
      />
      {isPending ? (
        <div>Filtrando...</div>
      ) : (
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

Troca de tabs com conteúdo pesado:

```js
function TabPanel() {
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState('tab1');
  const [content, setContent] = useState(null);

  const switchTab = (tab) => {
    // UI da tab atualiza imediatamente
    setActiveTab(tab);
    // Conteúdo carrega em transição
    startTransition(() => {
      setContent(getHeavyContent(tab)); // função que retorna conteúdo pesado
    });
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => switchTab('tab1')}>Tab 1</button>
        <button onClick={() => switchTab('tab2')}>Tab 2</button>
      </div>
      <div className="content">
        {isPending ? (
          <div>Carregando conteúdo...</div>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
```

Navegação entre páginas em SPA:

```js
function Navigation() {
  const [isPending, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState('home');
  const [pageData, setPageData] = useState(null);

  const navigate = (page) => {
    // Atualiza a URL imediatamente
    setCurrentPage(page);
    // Carrega dados da página em transição
    startTransition(async () => {
      const data = await fetchPageData(page);
      setPageData(data);
    });
  };

  return (
    <div>
      <nav>
        <button onClick={() => navigate('home')}>Home</button>
        <button onClick={() => navigate('products')}>Products</button>
      </nav>
      {isPending && <div className="loading-bar" />}
      <main>{pageData}</main>
    </div>
  );
}
```

Atualização de gráfico complexo:

```js
function DataChart() {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState('bar');

  const updateChartType = (type) => {
    // Atualiza o tipo imediatamente
    setChartType(type);
    // Recalcula dados em transição
    startTransition(() => {
      setData(processChartData(type)); // função pesada de processamento
    });
  };

  return (
    <div>
      <select onChange={e => updateChartType(e.target.value)}>
        <option value="bar">Barras</option>
        <option value="line">Linhas</option>
      </select>
      {isPending ? (
        <div>Atualizando gráfico...</div>
      ) : (
        <Chart type={chartType} data={data} />
      )}
    </div>
  );
}
```

O useTransition é especialmente útil quando:

Tem atualizações de UI que podem ser lentas
Precisa manter a interface responsiva durante operações pesadas
Quer mostrar estados de loading sem bloquear a interação do usuário
Tem que processar grandes quantidades de dados

Em todos esses casos, o useTransition ajuda a manter a UI suave e responsiva, mesmo durante operações pesadas.