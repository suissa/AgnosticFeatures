import { Button } from './index';

const ButtonDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Título */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Demonstração de Botões</h1>
          <p className="mt-2 text-gray-600">Exemplos dos diferentes estilos e variações de botões</p>
        </div>

        {/* Seção: Variantes Básicas */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Variantes Básicas</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => console.log('clicked')}>
              Clique aqui
            </Button>
            <Button variant="secondary">
              Secundário
            </Button>
            <Button variant="success">
              Sucesso
            </Button>
            <Button variant="danger">
              Perigo
            </Button>
          </div>
        </section>

        {/* Seção: Tamanhos */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tamanhos</h2>
          <div className="flex items-center gap-4 flex-wrap">
            <Button size="sm">
              Pequeno
            </Button>
            <Button size="md">
              Médio
            </Button>
            <Button 
              size="lg"
              variant="success"
            >
              Grande
            </Button>
          </div>
        </section>

        {/* Seção: Width e Customização */}
        <section className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Largura e Customização</h2>
          
          <div className="space-y-4">
            <Button fullWidth onClick={() => console.log('full')}>
              Botão Largura Total
            </Button>
            
            <div className="flex gap-4">
              <Button className="shadow-xl">
                Com Sombra
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                Gradiente
              </Button>
            </div>
          </div>
        </section>

        {/* Seção: Estados */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Estados</h2>
          <div className="flex gap-4 flex-wrap">
            <Button disabled>
              Desabilitado
            </Button>
            <Button variant="success" disabled>
              Sucesso Desabilitado
            </Button>
            <Button 
              className="animate-pulse"
              variant="danger"
            >
              Animado
            </Button>
          </div>
        </section>

        {/* Seção: Combinações */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Combinações</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button variant="success" size="sm">
                Aprovar
              </Button>
              <Button variant="danger" size="sm">
                Rejeitar
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Button variant="primary" size="lg" className="flex-1">
                Salvar
              </Button>
              <Button variant="secondary" size="lg" className="flex-1">
                Cancelar
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonDemo;