O useRef é um hook do React que serve para:

Manter uma referência mutável que persiste entre renderizações
Acessar elementos DOM diretamente

Aqui estão alguns exemplos práticos:


### Acesso ao DOM

```tsx
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focar input</button>
    </>
  );
}
```
Use quando precisar:

Focar inputs automaticamente
Medir dimensões de elementos
Controlar scroll (como no nosso chat)
Manipular o DOM diretamente


Guardar Valor Anterior


### Guardar valor anterior de uma prop/state:

```tsx
function Counter({ value }) {
  const previousValue = useRef(null);

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div>
      Atual: {value}, 
      Anterior: {previousValue.current}
    </div>
  );
}
```
Ideal para:

Comparar valores entre renderizações
Detectar mudanças em props/state
Implementar lógicas de comparação
Animações baseadas em mudanças

### Controlar vídeo/áudio:

```tsx
function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} src="video.mp4" />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
```
Perfeito para:

Controlar vídeos/áudio
Manipular canvas
Controlar elementos de mídia
Acessar APIs nativas de mídia


### Guardar intervalos/timeouts:


```js
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return <div>Count: {count}</div>;
}
```
Use quando precisar:

Limpar intervalos/timeouts
Evitar memory leaks
Manter referências entre renderizações
Implementar animações com timing

### Implementar debounce:
```js
function SearchInput() {
  const timeoutRef = useRef(null);

  const handleSearch = (text) => {
    // Cancela o timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Define novo timeout
    timeoutRef.current = setTimeout(() => {
      // Faz a busca
      console.log('Buscando:', text);
    }, 500);
  };

  return (
    <input 
      onChange={(e) => handleSearch(e.target.value)} 
      placeholder="Buscar..."
    />
  );
}
```
Ideal para:

Otimizar performance
Controlar frequência de eventos
Implementar search-as-you-type
Reduzir chamadas à API


Canvas/Animações:
```js
function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Desenha algo
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);
  }, []);

  return <canvas ref={canvasRef} width={500} height={500} />;
}
```
Perfeito para:

Desenhos em canvas
Animações complexas
Gráficos interativos
Jogos e visualizações

Em todos esses casos, useRef é especial porque:

Não causa re-renderização quando muda
Mantém o valor entre renderizações
É perfeito para referências mutáveis
Funciona bem com APIs imperativas

### Pontos importantes sobre useRef:

O valor em .current pode ser mudado sem causar re-renderização
É ideal para valores que precisam persistir entre renderizações
Muito útil para interagir com APIs imperativas (DOM, timeouts, intervals)
Diferente do estado (useState), mudanças no ref não causam re-renderização
O valor do ref persiste durante todo o ciclo de vida do componente

Em resumo, use useRef quando:

Precisar acessar elementos DOM diretamente
Precisar guardar valores que não devem causar re-renderização
Precisar manter referências para timeouts/intervals
Precisar implementar funcionalidades que requerem acesso imperativo