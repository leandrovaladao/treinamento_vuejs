# treinamento_vuejs

## Execução
Para rodar o projeto é necessário possuir o Docker instalando: https://hub.docker.com/

E para facilitar o Docker-Compose: https://docs.docker.com/compose/install/

Para rodar com as configurações padrões é necessário liberar a porta 8000 da máquina

Com eles instalados basta entrar na raiz do projeto e executar o comando docker-compose up -d

A aplicação começará a responder na porta 8000 da maquina.

Para acessar a interface gráfica basta ir na url: http://localhost:8000/initial/#/

Para checar as APIs é possivel buscar via requisição de API, o usuário padrão criado é username: admin e password: 123

Todas as APIs possuem os EndPoints completos: GET, POST, PUT, PATCH E DELETE

É necessário estar autenticado para acessar algumas APIs mas por motivos de praticidade não deixei todas bloqueadas com autenticação

Para autenticar nas APIs é necessário executar a requisição:

POST localhost:8000/api/token/

Content-Type: application/json

{
  "username": "admin",
  "password": "123"
}

Para acessar a documentação delas basta ir na url e digitar localhost:8000/api/v1/: posts / albums / todos / user

Pode também via requisição HTTP com autenticação buscar as urls disponiveis executando a requisição:

GET localhost:8000/api/v1

Authorization: Bearer|Token|JWT access adiquirido na autenticação

Quaisquer duvidas estou a disposição.

costavaladaol@gmail.com
