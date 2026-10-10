# Arquivo de Melhorias

## Pensando em Frontend

### M001 - Melhorias de SEO e indexação

- Avaliar a implementação de um robots.txt para definir orientações de rastreamento aos robôs dos mecanismos de busca.
- Avaliar a criação de um sitemap.xml para facilitar a descoberta das páginas públicas do projeto.

> **Obs.:** Para uma loja com apenas duas páginas, isso é uma melhoria de baixa prioridade. Ainda assim, faz sentido registrá-la como possibilidade futura.

### M002 - Aprimoramento da experiência visual

- Implementar uma hero section no catálogo para destacar a proposta da loja e facilitar o acesso às principais funcionalidades.
- Criar uma página sobre.html para apresentar a proposta da loja e fornecer informações institucionais.

### M003 - Filtro por plataformas

- Implementar a filtragem de jogos por plataforma, complementando os filtros por categoria existentes.

### M004 - Metadados para compartilhamento em redes sociais

- Implementar metadados Open Graph para personalizar a apresentação dos links da loja quando compartilhados em redes sociais e aplicativos de mensagens.
- Adicionar metadados do Twitter Cards para configurar a apresentação dos links na plataforma X.
- Criar uma imagem de pré-visualização personalizada para representar a identidade visual da loja.

### M005 - Implementação de favicon

- Criar um favicon alinhado à identidade visual da loja.
- Configurar as referências ao favicon no HTML para exibição nos navegadores.

### M006 - Otimização de desempenho

- Otimizar as imagens dos jogos para reduzir o tamanho dos arquivos e o tempo de carregamento.
- Avaliar oportunidades para reduzir operações desnecessárias de atualização do DOM.
- Verificar o aproveitamento do cache do navegador para recursos estáticos.

### M007 - Implementação de uma página 404

- Criar uma página personalizada para informar ao usuário quando o recurso solicitado não for encontrado.
- Fornecer uma opção para retornar ao catálogo de jogos, melhorando a navegação após um acesso inválido.

## Pensando em Manutenção do código

### M008 - Implementação de testes automatizados

- Implementar testes unitários para as funções responsáveis pela manipulação do carrinho, cálculo dos totais e demais regras de negócio existentes.
- Garantir que futuras alterações não comprometam comportamentos já implementados.

### M009 - Implementação de integração contínua (CI)

- Configurar um fluxo de CI para executar os testes automatizados e outras verificações relevantes a cada _push_ ou _pull request_.
- Utilizar os resultados dessas verificações para identificar problemas antes da integração das alterações.

> **Obs.:** Como o projeto está hospedado na Vercel, não considero necessária a implementação de um CD separado neste momento, pois a plataforma já oferece automação de build e deploy. A implementação de um CI, por outro lado, seria interessante para executar testes automatizados e outras verificações antes da integração das alterações.
