## API desenvolvida com NestJS.

## Instalação

```bash
$ npm install
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Aquivo .env
<p>Crie um arquivo .env na raiz do projeto e preencha seguindo o exemplo:</p>

```
  PORT=3000
  MONGO_DB_URL=mongodb://127.0.0.1:27017/Users
  JWT_SECRET=meusegredo
```

## Endpoints

<p>POST /users - Registra um novo Usuário</p>
<p>O endpoint retorna o usuário cadastrado</p>
<p>Exemplo do Body:</p>

```
{
  "name": "João Silva",
  "email": "joao.silva@email.com",
  "password": "123456"
}
```


<p>POST /login - Realiza o login na aplicação</p>
<p>O endpoint retorna um objeto contendo o Bearer token de autenticação para as demais rotas. Ex: { token }</p>
<p>Exemplo do Body:</p>

```
{
  "email": "joao.silva@email.com",
  "password": "123456"
}
```

<br />
<p>GET /users - Lista todos os usuários cadastrados na aplicação</p>
<p>O endpoint necessita de um token de autenticação enviado nos headers</p>

<br />
<p>GET /users/:id - Lista o usuário cadastrado na aplicação, correspondente ao ID do parametro.</p>
<p>O endpoint necessita de um token de autenticação enviado nos headers</p>

<br />
<p>PUT /users/:id - Atualiza os dados do usuário cadastrado na aplicação, correspondente ao ID do parametro.</p>
<p>O endpoint necessita de um token de autenticação enviado nos headers</p>
<p>Exemplo do Body:</p>

```
{
  "name": "João da Silva",
  "email": "joao.silva@email.com",
  "password": "novasenha123"
}
```

<br />
<p>DELETE /users/:id - deleta do DB o usuário cadastrado na aplicação, correspondente ao ID do parametro.</p>
<p>O endpoint necessita de um token de autenticação enviado nos headers</p>

<br />
<p>POST /calculator/:operacao - faz o cálculo de todos os algarismos romanos passado no array do body</p>
<p>O parametro operacao corresponde a operação que sera realizada pelo endpoint, tendo duas opções:</p>

```
    sum: Soma
    sub: Subtração
```

<p>O endpoint necessita de um token de autenticação enviado nos headers</p>
<p>Exemplo do Body:</p>

```
{
  "array": ["V", "X", "III", "IV", "XXX", "CD", "XC", "II", "VI"]
}
```
