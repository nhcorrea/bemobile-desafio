# Be Mobile - Desafio Mobile

## Sobre o Desafio
Aplicação consiste em uma tabela com informações vindas da API simulada (json-server).  
A tabela deve contem colunas com foto e nome do funcionário e ao pressionar no card do funcionário o card expande e mais informações são mostradas como: Cargo, Data de admissão e Telefone.  
Além disso também há possibilidade de pesquisar por Nome, Cargo ou Telefone.  
Menor número de Libs foram utilizadas como recomendado nas condições do desafio.

[Figma do projeto](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste---Be-mobile?node-id=0%3A1)

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
- [Git][1]
- [Node.js][2]
- [Yarn][3]

[1]: https://git-scm.com/
[2]: https://nodejs.org/en/
[3]: https://yarnpkg.com/

## Como utilizar
```bash
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












