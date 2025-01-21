# Feature Chat

## Tipagens

Para tipar o evento corretamente em TypeScript, você deve usar o tipo adequado para o evento que está sendo disparado. No caso de um input de tipo texto o tipo do evento será 
`React.ChangeEvent<HTMLInputElement>`.  Esse tipo garante que o TypeScript compreenda as propriedades de e.target corretamente, como o value, que é o valor do input.

Aqui está um exemplo de como você pode tipar a função onChange:

```tsx
<form onSubmit={onSubmit}>
  <div>
    <Input 
      type="text"  
      value="" 
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => 
        setMessage({owner: getOwner(), text: e.target.value, datetime: getDatetime()})}>
      </Input>
  </div>
  <Button type="submit">Enviar</Button> 
</form>
```


Para definir  o tipo correto para o evento de submissão de um formulário é 
`React.FormEvent<HTMLFormElement>`, já que você lida com um formulário (<form>), e o evento ocorre em um elemento HTML do tipo form.

### Os Outros Tipos

#### React.FormEvent

- Elementos HTML: form, input, textarea, select
- Tipo: React.FormEvent<T> onde T é o tipo do elemento. Por exemplo:
- React.FormEvent<HTMLFormElement> para um <form>
- React.FormEvent<HTMLInputElement> para um <input>

Exemplo:

```tsx
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
```

#### React.ChangeEvent

- Elementos HTML: input, textarea, select
- Tipo: React.ChangeEvent<T> onde T é o tipo do elemento. Exemplos:
- React.ChangeEvent<HTMLInputElement> para um <input>
- React.ChangeEvent<HTMLTextAreaElement> para um <textarea>

Exemplo:

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
};
``` 
#### React.MouseEvent

- Elementos HTML: Qualquer elemento que possa ser clicado, como button, div, a, etc.
- Tipo: React.MouseEvent<T> onde T é o tipo do elemento. Exemplos:
- React.MouseEvent<HTMLButtonElement> para um <button>
- React.MouseEvent<HTMLDivElement> para um <div>

Exemplo:

```tsx
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Button clicked');
};
```

#### React.KeyboardEvent

- Elementos HTML: Qualquer elemento que possa receber entrada de teclado, como input, textarea, div (com contentEditable), etc.
- Tipo: React.KeyboardEvent<T> onde T é o tipo do elemento. Exemplos:
- React.KeyboardEvent<HTMLInputElement> para um <input>
- React.KeyboardEvent<HTMLTextAreaElement> para um <textarea>

Exemplo:

```tsx
const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    console.log('Enter pressed');
  }
};
const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    console.log('Enter released');
  }
};
```

#### React.FocusEvent

- Elementos HTML: Elementos de formulário como input, textarea, select, button, etc.
- Tipo: React.FocusEvent<T> onde T é o tipo do elemento. Exemplos:
- React.FocusEvent<HTMLInputElement> para um <input>
- Uso: Para capturar eventos de foco (quando um elemento recebe ou perde o foco).

Exemplo:

```tsx
const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  console.log('Campo focado');
};

const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  console.log('Campo perdeu o foco');
};
```

#### Eventos de Carregamento: React.SyntheticEvent<T>

- Elemento HTML: img, iframe, audio, video
- Uso: Para capturar eventos como carregamento de imagens ou elementos de mídia.

Exemplo:

```tsx
const onLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
  console.log('Imagem carregada');
};
```
#### Eventos de Alteração de Entrada (Input): React.FormEvent<T>

- Elemento HTML: input, textarea, select
- Uso: Para capturar entradas de texto ou seleção de valores.

Exemplo:

```tsx
const onInput = (e: React.FormEvent<HTMLInputElement>) => {
  console.log('Valor do input alterado');
};
```

#### Eventos de Toque (Touch): React.TouchEvent<T>

- Elemento HTML: div, button, input (geralmente para dispositivos móveis)
- Uso: Para capturar eventos de toque, como no caso de dispositivos móveis.

Exemplo:

```tsx
const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  console.log('Toque iniciado');
};
``` 

## Verificação de valor antes de definir um state

Uma coisa  que é importante salientar é que quando você define uma `interface` para seu state
é necessário que você faça uma checkagem se o valor que será definido não seja undefined ou null, por exemplo:

```tsx
const [ messages, setMessages ] = useState<IMessage[]>([]);
``` 

Aqui eu espero um `array` de IMessage, então quando eu defino em `src/features/chat/molecules/ChatInputMessage.tsx` esse código:

```tsx
const [message, setMessage] = useState<IMessage>();
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (message) {
    setMessages((prev) => [...prev, message]);
  }
};
```

É obrigatório que eu faça essa validação do valor de `message` antes de usá-lo, ou poderia definir um valor inicial assim:


```tsx
const [message, setMessage] = useState<IMessage>({
  owner: '',
  text: '',
  datetime: '',
});
```

Porque se eu não fizer uma dessas 2 soluções irei receber um erro assim:

```
Argument of type '(prev: IMessage[]) => (IMessage | undefined)[]' is not assignable to parameter of type 'SetStateAction<IMessage[]>'.
  Type '(prev: IMessage[]) => (IMessage | undefined)[]' is not assignable to type '(prevState: IMessage[]) => IMessage[]'.
    Type '(IMessage | undefined)[]' is not assignable to type 'IMessage[]'.
      Type 'IMessage | undefined' is not assignable to type 'IMessage'.
        Type 'undefined' is not assignable to type 'IMessage'.

28     setMessages((prev) => [...prev, message]);
```

Então lendo a última linha `Type 'undefined' is not assignable to type 'IMessage'.`
fica bem mais fácil de entender o real problema.

**#ficadica**

Também há outro cenário onde você define os campos de um objeto como obrigatórios, mas 
quer atualziar apenas um campo, por exemplo:

```tsx
export interface IMessage {
  owner: string;
  text: string;
  datetime: string;
  type: string; // sender | receiver
  className?: string;
}

const [message, setMessage] = useState<IMessage>();

setMessage((prev) => ({
  ...prev,
  text: "",
}))
```

Você vai se deparar com esse erro:

```
Argument of type '(prev: IMessage | undefined) => { text: string; owner?: string | undefined; datetime?: string | undefined; type?: string | undefined; className?: string | undefined; }' is not assignable to parameter of type 'SetStateAction<IMessage | undefined>'.
  Type '(prev: IMessage | undefined) => { text: string; owner?: string | undefined; datetime?: string | undefined; type?: string | undefined; className?: string | undefined; }' is not assignable to type '(prevState: IMessage | undefined) => IMessage | undefined'.
    Call signature return types '{ text: string; owner?: string | undefined; datetime?: string | undefined; type?: string | undefined; className?: string | undefined; }' and 'IMessage | undefined' are incompatible.
      The types of 'owner' are incompatible between these types.
        Type 'string | undefined' is not assignable to type 'string'.
          Type 'undefined' is not assignable to type 'string'.ts(2345)
```

Isso acontece porque você precisa garantir que os valores não são undefined,
basicamente sempre quue você ver esse erro de undefined é porque você precisa ou testar ele
antes ou definir seu valor, nesse caso eu defini um valor padão:

```tsx
setMessage((prev) => ({
  ...prev,
  text: "",
  owner: prev?.owner || "suissa",
  datetime: prev?.datetime || getDatetime(),
  type: prev?.type || "sender",
}))
```