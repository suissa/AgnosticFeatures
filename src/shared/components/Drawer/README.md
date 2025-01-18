# Decisões adotadas

## Tamanho

- mínimo: 280px (w-72)
- ideal: 320px (w-80)

## Mobile:

- w-72 = 288px

Razão: É o mínimo aceitável que permite:
- Links/botões com ícones e texto
- Pequenas listas de ações
- Menus básicos

## Desktop:

- mínimo: 320px (w-80)
- confortável: 384px (w-96)
- máximo recomendado: 448px (w-[448px])

A razão para essas medidas:

280px é o mínimo para acomodar confortavelmente textos e elementos de UI comuns
320px corresponde à largura de um dispositivo móvel em modo retrato
384px oferece espaço suficiente para formulários e listas mais complexas
Acima de 448px o drawer começa a ocupar muito espaço da tela

## Button trigger

Escolhi não passar o button como um triiger para dentro do componente pois assim temos:
- maior flexibilidade de implementação
- separação clara de responsabilidades
- mais fácil de integrar em fluxos complexos
- controle mais granular do estado

Além disso:

- drawers frequentemente precisam ser acionados de múltiplos lugares na aplicação
- o estado do drawer pode precisar ser controlado por lógicas complexas de negócio
- a posição do trigger geralmente está relacionada ao layout da página, não ao drawer em si
- mantém o componente mais focado em sua responsabilidade principal (mostrar conteúdo sobreposto)
- facilita a implementação de padrões como comandos globais de teclado para abrir/fechar

