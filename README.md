# Nginx com Node.js
```Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d 
que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.
```

# Solução
1) Criar pasta da estrutura do projeto node
- docker run -it -v $(pwd)/node:/usr/src/app --name node node bash
- npm init -y
- npm install express mysql2 --save

2) Subir docker-compose
- docker-compose up -d --build

3) Adicionar nome
- http://localhost:8080/MeuNome

4) Apenas listar nomes já inseridos
- http://localhost:8080

2) Descer docker-compose
- docker-compose down