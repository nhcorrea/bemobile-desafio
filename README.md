# Be Mobile - Desafio Mobile

## Sobre o Desafio
Aplicação consiste em uma tabela com informações vindas da API simulada (json-server).  
A tabela deve conter colunas com fotos e nomes dos funcionários e ao pressionar no card do funcionário o card expande e mais informações são mostradas como: Cargo, Data de admissão e Telefone.  
Além disso também há possibilidade de pesquisar por Nome, Cargo ou Telefone.  
Menor número de Libs foram utilizadas como recomendado nas condições do desafio.

[Figma do projeto](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste---Be-mobile?node-id=0%3A1)

## Running
<div>
    <img src="https://media3.giphy.com/media/FCNgnsQQjs3vWRm4vv/giphy.gif?cid=790b761180425634bf36b5b6a74815852c580e02f6194217&rid=giphy.gif&ct=g" />
    <img src="https://media1.giphy.com/media/LEFSaYah68RppUltUW/giphy.gif?cid=790b76114d9ed10673c7aa2e34d1e7d574e9d31ce49ff8bb&rid=giphy.gif&ct=g" />
    <img src="https://media4.giphy.com/media/qdLx2q9DnTPCHuGNno/giphy.gif?cid=790b761173ce13cc3a5eaa03c1f186fae4546d9e359905a3&rid=giphy.gif&ct=g" />
</div>

## Tecnologias

- [Expo][1]
- [React Native][2]
- [Typescript][3]
- [Axios][4]
- [json-server][5]
- [styled-components][6]
- [react-native-animatable][7]

[1]: https://expo.dev/
[2]: https://reactnative.dev/
[3]: https://www.typescriptlang.org/
[4]: https://axios-http.com/ptbr/docs/intro
[5]: https://github.com/typicode/json-server
[6]: https://styled-components.com/
[7]: https://github.com/oblador/react-native-animatable

## Pré Requisitos
- [Git][8]
- [Node.js][9]
- [Yarn][10]

[8]: https://git-scm.com/
[9]: https://nodejs.org/en/
[10]: https://yarnpkg.com/

## Como utilizar
```bash
# Clone o Repositório
$ git clone https://github.com/nathahernandez/bemobile-desafio.git

# Navegue para pasta do repositório
$ cd bemobile-desafio

# Instale as dependências do Projeto
$ yarn

# json-server
# React native não entende "LOCAL_HOST" 
# Então temos que configurar o IP Local e Porta
# Configure em package.json
# Em "scripts": "server" o --host e --port para iniciar o server
# Exemplo:
# "server": "json-server server.json -w --host 192.168.100.7 --port 4444"

# Axios
# Configurar na api para consumir no endereço e porta corretamente.
# Na pasta ./src/services/api.ts nas constantes LOCAL_IP e PORT
# Exemplo:
# LOCAL_IP = "192.168.100.7"
# PORT = "4444"

# Após concluir as configurações, iniciamos o json-server
$ yarn server
# E iniciamos o expo
$ yarn start
```












