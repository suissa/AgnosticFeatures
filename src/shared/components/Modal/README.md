# Modal

O *Modal* é um componente de interface que cria uma janela flutuante sobreposta ao conteúdo principal da página. É usado para:


- exibir informações importantes que precisam de atenção imediata
- formulários curtos
- confirmações de ações
- alertas
- detalhamento de informações

## Características

- foca a atenção do usuário
- backdrop com blur effect
- animação de entrada/saída
- fecha com ESC
- fecha clicando fora
- header com título e botão de fechar
- responsivo
- customizável via className
- acessibilidade básica
- tipagem com TypeScript
- consistente com design system

# Backdrop

Backdrop é a camada escura/embaçada que fica por trás do modal, servindo como um "fundo" que:

- escurece o conteúdo da página principal
- ajuda a focar a atenção no modal
- indica visualmente que o conteúdo principal está inacessível

No nosso código ele é esta div:
```html
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
```

Onde:

- inset-0: ocupa toda a tela
- bg-black/50: fundo preto com 50% de opacidade
- backdrop-blur-sm: desfoque suave do conteúdo atrás
