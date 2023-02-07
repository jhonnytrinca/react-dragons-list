# React Dragons list

Aplicação desenvolvida para listagem, criação e edição de dragões.
Para acesso a aplicação, é necessário login com email e senha válidos ou cadastrar um usuário por meio da tela de login.

[Clique aqui](https://jhonnytrinca.github.io/react-dragons-list/) para acessar a aplicação.

## Tecnologias utilizadas

- [ReactJS](https://reactjs.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [SWR](https://swr.vercel.app/)
- [Tailwind](https://tailwindcss.com/)
- [Formik](https://formik.org/)
- [Yup](https://www.npmjs.com/package/yup)
- [Cypress Component Testing](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Firebase](https://firebase.google.com/)
- [React Firebase Hooks](https://github.com/csfrequency/react-firebase-hooks/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Tooltip](https://github.com/ReactTooltip/react-tooltip)

## Informações sobre tecnologias utilizadas

- **Axios** - Utilizado para o consumo dos dados da API.
- **SWR** - Para otimização dos dados exibidos em tela, utilizando do 'state-while-revalidating' para exibir dados guardados em cache enquanto espera a requisição ser finalizada para revalidação dos dados. Dessa forma, em casos de mudança de página ou que o usuário busque por um termo já pesquisado anteriormente, não há incidência de loading;
- **Tailwind** - Utilizado na estilização da aplicação, framework que traz facilidade na aplicação e customização, código enxuto e grande ganho na responsividade e aplicação de dark mode;
- **Formik** - Facilitador na criação de formulários, utilizado para guardar os quadrinhos selecionados, nome e email para envio dos dados;
- **Yup** - Trabalhando juntamente do Formik, faz a validação de campos obrigatórios;
- **Cypress Component Testing** - Plataforma de testes do Cypress voltada a testes de componentes do React, oferecendo agilidade e precisão na criação de testes, por possuir uma interface gráfica mostrando de forma intuitiva todas as etapas do teste e indicação de falhas;
- **Firebase / React Firebase Hooks** - Utilizados para a criação e validação de usuários para login na aplicação.
- **Framer Motion** - Utilizado para criação de animações da aplicação
- **React Icons** - Utilizado para ícones da aplicação
- **React Tooltip** - Utilizado para a funcionalidade de tooltip, para exibição de um pop up informativo ao realizar o hover.

## Rodando localmente

Para rodar esse projeto será necessário possuir o [NodeJs](https://nodejs.org/en/), [Git](https://git-scm.com/) e um editor de sua preferência, como [VS Code](https://code.visualstudio.com/).

Clone o repositório e o acesse na pasta do projeto

```
$ git clone https://github.com/jhonnytrinca/react-dragons-list
```

No diretório do projeto, instale as dependências com:

`yarn` ou `npm install`

Além disso, é necessário possuir um projeto ativo no Firebase com a autenticação via e-mail e senha configurados. Após isso, crie um arquivo `.env.local` e insira como variáveis de ambiente os valores referentes à credencial informada no painel do Firebase.

Após isso, para rodar o projeto, utilize:

`yarn start` ou `npm start`

Isso rodará a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualização no browser.

## Rodando os testes

Para rodar os testes, o Cypress oferece duas formas de visualização:

`yarn cy:run` ou `npm run cy:run` - roda do modo clássico, fazendo a verificação dos testes e exibindo seus resultados pelo terminal;

`yarn cy:ct` ou `npm run cy:ct` - roda do modo gráfico, abrindo em uma nova janela do browser os testes, sendo possível ver em tela cada etapa do teste sendo realizada, de forma semelhante ao que o usuário final faria. Permite também localizar com mais facilidade qualquer tipo de problema.

Devido problemas de compatibilidade entre o Firebase e os testes de componentes oferecidos pelo Cypress até o presente momento, é necessário ajustar as variáveis de ambiente fornecidas para o Firebase como valores fixos antes de acessar aos testes.

## Screenshots

### - Página login

![Página login](https://i.imgur.com/v1riWVt.jpg)

### - Página em dark mode

![Página login em dark mode](https://i.imgur.com/wrRA2uc.jpg)

#### - Listagem

![Listagem](https://i.imgur.com/H0O8KH9.jpg)

#### - Listagem em dark mode

![Listagem em dark mode](https://i.imgur.com/e8pNPQo.jpg)

#### - Página de detalhes

![Página de detalhes](https://i.imgur.com/vnzUcxV.jpg)

#### - Página de detalhes em dark mode

![Página de detalhes em dark mode](https://i.imgur.com/Qhh7Sp7.jpg)

#### - Página de edição

![Página de edição](https://i.imgur.com/tEGzkKx.jpg)

#### - Página de edição em dark mode

![Página de edição em dark mode](https://i.imgur.com/0NsPkky.jpg)

#### - Página de login mobile em light e dark mode

![Página de login mobile em light e dark mode](https://i.imgur.com/u6MGKbc.jpg)

#### - Listagem mobile em light e dark mode

![Listagem mobile em light e dark mode](https://i.imgur.com/Ged6AXQ.jpg)

#### - Página mobile de detalhes em light e dark mode

![Página mobile de detalhes em light e dark mode](https://i.imgur.com/u4LjcAV.jpg)

#### - Página mobile de edição em light e dark mode

![Página mobile de edição em light e dark mode](https://i.imgur.com/8NTLCjH.jpg)

#### - Testes de componentes e página realizados

![Testes de componentes e página realizados](https://i.imgur.com/6H39uuj.png)

## Contribuindo

Para contribuir nesse projeto:

- Faça um fork do projeto;
- Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
- Crie um commit com suas alterações: `git commit -m "feature: my feature"`
- Faça o envio das alterações: `git push origin my-feature`
