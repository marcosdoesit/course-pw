# Playwright

## Elements Getters

```js
// getByTestId: get an element by its data-testid value
await page.getByTestId("name").fill("marcos");

// locator: get an element by its selector (like query selector)
// #name get by id = name
await page.locator("#name").fill("marcos");

// getting by placeholder text
await page.getByPlaceholder("Seu nome completo");

// getting input by prop and value:
await page.locator("input[placeholder='fill your name']");
await page.locator("input[name=name]");

// Locating elements that contain given text.
await page.getByText("Quero entrar na fila!").click();

// Nesting locating
await page.getByTestId("modal").getByText("Quero entrar na fila!").click();
```

# Zombie+ (Regression Tests)

Os casos de teste planejados têm como finalidade testar as funcionalidades e garantir a qualidade do software Zombie+. Cada caso de teste específico se destina a verificar um cenário particular dentro do sistema, e a finalidade geral dos testes é garantir que o software funcione conforme o esperado, cumprindo os requisitos de negócios e fornecendo uma experiência confiável aos usuários.

## Landing Page

Os testes nesse conjunto verificam a funcionalidade de cadastro e autenticação de leads na fila de espera, garantindo que os leads possam se cadastrar com sucesso e que a autenticação funcione corretamente.

### Fila de espera (Leads)

- Cadastro válido
  - Ação: Preencher todos os campos obrigatórios (nome e email) com informações válidas e clicar em "Cadastrar".
  - Resultado esperado: O lead é cadastrado com sucesso no sistema.
- Cadastro com campos em branco
  - Ação: Deixar os campos de nome e/ou email em branco e clicar em "Cadastrar".
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que os campos obrigatórios devem ser preenchidos.
- Cadastro com formato de email inválido
  - Ação: Preencher o campo de email com um formato inválido e preencher o campo de nome corretamente, depois clicar em "Cadastrar".
  - Resultado esperado: Uma mensagem de erro é exibida, informando que o formato do email é inválido.

### Autenticação (Login)

- Login com credenciais válidas
  - Ação: Informar um email e senha válidos de um usuário registrado e clicar em "Login".
  - Resultado esperado: O usuário é redirecionado para a área logada do sistema.
- Login com email inválido
  - Ação: Informar um email inválido e uma senha válida e clicar em "Login".
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que o email é inválido.
- Login com senha incorreta
  - Ação: Informar um email válido e uma senha incorreta e clicar em "Login".
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que a senha está incorreta.
- Login com usuário não registrado
  - Ação: Informar um email não registrado e uma senha e clicar em "Login".
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que o usuário não está registrado no sistema.

# Admin

Esses testes visam validar as operações de cadastro, busca e exclusão de filmes e séries na administração do sistema. Eles garantem que os dados sejam armazenados corretamente, que as buscas retornem resultados precisos e que a exclusão de conteúdo seja realizada sem problemas.

## Gestão de Filmes

### Cadastro

- Cadastro de filme válido
  - Ação: Preencher todos os campos obrigatórios do formulário de cadastro de filme com informações válidas e clicar em "Cadastrar".
  - Resultado esperado: O filme é cadastrado com sucesso no sistema.
- Cadastro de filme com campos em branco
  - Ação: Deixar pelo menos um campo obrigatório em branco e clicar em "Cadastrar".
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que os campos obrigatórios devem ser preenchidos.
- Cadastro de série com dados duplicados
  - Ação: Preencher o formulário com informações de uma série já cadastrada e clicar em "Cadastrar".
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que a série já está cadastrada no sistema.
- Cadastro de conteúdo destaque
  - Ação: Preencher todos os campos obrigatórios e marcar o filme como destaque.
  - Resultado esperado: O filme marcado como destaque é exibida na landing page.

### Busca

- Busca de filmes
  - Ação: Realizar uma busca por título de filme existente.
  - Resultado esperado: A lista de filmes correspondentes ao critério de busca é exibida.
- Termo de busca não encontrado
  - Ação: Realizar a busca por título de filme que não existe.
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que a busca não retornou dados conforme o termo de busca.

### Exclusão

- Exclusão de filme
  - Ação: Selecionar um filme da lista e clicar em "Excluir".
  - Resultado esperado: O filme é removido com sucesso do sistema.

## Gestão de Séries

### Cadastro

- Cadastro de série válida
  - Ação: Preencher todos os campos obrigatórios do formulário de cadastro de série com informações válidas e clicar em "Cadastrar".
  - Resultado esperado: A série é cadastrada com sucesso no sistema.
- Cadastro de série com dados duplicados
  - Ação: Preencher o formulário com informações de uma série já cadastrada e clicar em "Cadastrar".
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que a série já está cadastrada no sistema.
- Cadastro de série com campos em branco
  - Ação: Deixar pelo menos um campo obrigatório em branco e clicar em "Cadastrar".
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que os campos obrigatórios devem ser preenchidos.
- Cadastro de conteúdo destaque
  - Ação: Preencher todos os campos obrigatórios e marcar a série como destaque.
  - Resultado esperado: A série marcada como destaque é exibida na landing page.

### Busca

- Busca de séries
  - Ação: Realizar uma busca por título de série existente.
  - Resultado esperado: A lista de séries correspondentes ao critério de busca é exibida.
- Termo de busca não encontrado
  - Ação: Realizar a busca por título de série que não existe.
  - Resultado esperado: Uma mensagem de erro deve ser exibida, informando que a busca não retornou dados conforme o termo de busca.

### Exclusão

- Exclusão de série
  - Ação: Selecionar uma série da lista e clicar em "Excluir".
  - Resultado esperado: A série é removida com sucesso do sistema.

## Gestão Leads

Esses testes se concentram na funcionalidade de gerenciamento de leads, incluindo listagem, busca e exclusão de leads no sistema. Eles asseguram que os dados dos leads sejam exibidos corretamente, que a busca funcione e que os leads possam ser removidos conforme necessário.

- Busca de leads
  - Ação: Realizar uma busca por nome de lead existente.
  - Resultado esperado: A lista de leads correspondentes ao critério de busca é exibida.
- Exclusão de lead
  - Ação: Selecionar um lead da lista e clicar em "Excluir".
  - Resultado esperado: O lead é removido com sucesso do sistema.

# Roadmap

![alt text](md-img/image.png)
