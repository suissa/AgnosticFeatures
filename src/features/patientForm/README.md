# PatientForm


## Máscara

Utilizei a biblioteca [@react-input/mask](https://www.npmjs.com/package/@react-input/mask), porém não consegui usar ela no formato:

```ts
<InputMask mask="+0 (___) ___-__-__" replacement={{ _: /\d/ }} />
```

Pois não ativava o evento onChange, tentei de diversas formas e nenhuma com sucesso, porém eu olhei na documentação que também poderia ser feito via referência, usando esse exemplo:

```ts
import { useMask } from '@react-input/mask';

export default function App() {
  const inputRef = useMask({
    mask: '+0 (___) ___-__-__',
    replacement: { _: /\d/ },
  });

  return <input ref={inputRef} />;
}
```

Como eu uso um átomo de `input` customizado eu só precisei adicionar essa parte de `ref` em sua definição, então meu `Input` ficou assim:

```tsx
import React, { forwardRef } from "react";

interface InputProps {
  className?: string;
  id?: string;
  type: string;
  value: string;
  placeholder?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

// Usando forwardRef para aceitar corretamente refs externas
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      type,
      placeholder,
      value,
      onClick,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
    },
    ref
  ) => (
    <input
      ref={ref} // Encaminha a ref recebida para o elemento input
      className={className}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  )
);

```

E ele era assim:

```tsx
interface InputProps {
  className?: string;
  id?: string;
  type: string;
  value: string;
  placeholder?: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}


export const Input = ({ 
  className, id, type, placeholder, value,
  onClick, onChange, onFocus, onBlur, onKeyDown}: InputProps) => (
  <input 
    className={className}
    id={id}
    type={type}
    value={value}
    placeholder={placeholder}
    onClick={onClick}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onKeyDown={onKeyDown}
  />
)
```

### O `forwardRef`

O `forwardRef` no React é utilizado para encaminhar uma referência (`ref`) de um componente pai para um componente filho, permitindo que o componente pai tenha acesso direto ao DOM ou a um componente específico dentro do componente filho. Ele é especialmente útil em casos onde precisamos interagir diretamente com o DOM (como inputs, botões, etc.) ou em integrações com bibliotecas que exigem refs.

#### Por que usamos `forwardRef`?

No exemplo do `Input`, o `forwardRef` permite que um componente pai envie uma `ref` para acessar diretamente o elemento <input> DOM. Isso é útil para:

- focar um campo de formulário programaticamente.
- obter o valor do input diretamente via ref.
- usar bibliotecas que dependem de refs para manipulação do DOM.

#### Exemplo muito comum: 

Botões com funcionalidades avançadas

Imagine um botão que pode ser desabilitado/habilitado ou clicado programaticamente. Aqui está um exemplo com `forwardRef`:

```tsx
import React, { forwardRef, useRef } from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

// Usando forwardRef para expor o botão
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, disabled, children }, ref) => (
    <button
      ref={ref} // Encaminha a ref para o elemento <button>
      className={`px-4 py-2 rounded ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
);
```

Agora no componente pai, podemos usar a ref para manipular o botão diretamente:

```tsx
import React, { useRef } from "react";
import { Button } from "./Button";

export const App = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleDisable = () => {
    if (buttonRef.current) {
      buttonRef.current.disabled = true; // Desabilita o botão programaticamente
    }
  };

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click(); // Dispara o clique programaticamente
    }
  };

  return (
    <div className="p-4">
      <Button ref={buttonRef} className="bg-blue-500 text-white">
        Clique aqui
      </Button>
      <div className="mt-4 space-x-4">
        <button onClick={handleDisable} className="bg-gray-300 px-3 py-1 rounded">
          Desabilitar botão
        </button>
        <button onClick={handleClick} className="bg-gray-300 px-3 py-1 rounded">
          Simular clique
        </button>
      </div>
    </div>
  );
};
```

#### Outros casos de uso comuns

Manipular animações ou estilos diretamente com `ref`:

```tsx
import React, { useRef } from "react";

const AnimatedDiv = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    style={{
      width: "100px",
      height: "100px",
      backgroundColor: "blue",
    }}
  />
));

export const App = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleAnimate = () => {
    if (divRef.current) {
      divRef.current.style.transform = "scale(1.5)";
      divRef.current.style.transition = "transform 0.5s";
    }
  };

  return (
    <div>
      <AnimatedDiv ref={divRef} />
      <button onClick={handleAnimate}>Animar</button>
    </div>
  );
};
```

Em resumo, o `forwardRef` é útil sempre que você precisar expor um elemento DOM ou componente interno a partir de um componente encapsulado. Ele garante flexibilidade ao integrar funcionalidades avançadas, como controle direto do DOM, animações, ou integração com bibliotecas externas.


## Validação

Para a validação de valores dos `input`s eu usei a biblioteca [zod](https://zod.dev/).

Então eu criei moléculas para os `input`s que necessitavam de validação e adicionei essa lógica no evento `onBlur`, eu já tinha as moléculas dos `form`s de `PatientBasicInfos`, `PatientClinicalInfos` e `PatientAditionalInfos` e no Atomic Design as moléculas são agrupamentos de átomos, porém eu já tinha o átomo de `Input`, em `shared/atoms/Button`, e de `LabelPatient`, então não cabia criar um `Input` tão complexo e usando esses 2 átomos como um átomo, então logicamente criei como molécula, até porque pelo conceito Químico uma molécula pode ser feita de outras moléculas, assim como definido pela [Reação de Síntese ou Adição](https://www.manualdaquimica.com/quimica-inorganica/reacoes-sintese-ou-adicao.htm)  que explica:

> **Síntese total**: As reações inorgânicas de síntese ou de adição são aquelas que ocorrem entre duas ou mais substâncias, originando um único produto mais complexo.

***Por exemplo, o gás hidrogênio reage com o gás nitrogênio, originando a amônia***

> **Síntese parcial**: Ocorre quando um ou mais reagentes são substâncias compostas (formadas por mais de um elemento químico).

***Por exemplo, a amônia é uma substância composta que, ao entrar em contato com o gás cloreto de hidrogênio (gás liberado pela solução de ácido clorídrico (Hcl), que também é uma substância composta), forma o cloreto de amônio, que é um vapor branco e altamente denso***