O useSyncExternalStore é perfeito para integrar com WebSocket porque ele foi feito exatamente para sincronizar com fontes de dados externas.
Exemplo de implementação:
typescriptCopyimport { useSyncExternalStore } from 'react';

// Criando um store simples para o WebSocket
const createWebSocketStore = (url: string) => {
  let ws: WebSocket;
  let data: any = null;
  const subscribers = new Set<() => void>();

  // Conecta ao WebSocket
  const connect = () => {
    ws = new WebSocket(url);
    
    ws.onmessage = (event) => {
      data = JSON.parse(event.data);
      // Notifica todos os subscribers quando receber nova mensagem
      subscribers.forEach(callback => callback());
    };
  };

  // Inicia a conexão
  connect();

  return {
    subscribe: (callback: () => void) => {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    },
    getSnapshot: () => data
  };
};

// Hook personalizado para usar o WebSocket
function useWebSocket(url: string) {
  const store = createWebSocketStore(url);
  
  const data = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot
  );

  return data;
}

// Uso no componente
function Component() {
  const data = useWebSocket('wss://seu-websocket.com');

  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      Dados em tempo real: {JSON.stringify(data)}
    </div>
  );
}
Benefícios de usar useSyncExternalStore com WebSocket:

Atualizações automáticas da UI quando chegam novas mensagens
Gerenciamento de inscrição/cancelamento automático
Concorrência segura (race conditions)
Integração natural com o React

Porém, lembre-se:

Mantenha a lógica de WebSocket em um store separado
Trate reconexões e erros adequadamente
Cuide do cleanup quando o componente desmontar