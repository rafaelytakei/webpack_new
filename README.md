# Suthub Webpack Boilerplate

## Sobre

### [Webpack](https://webpack.js.org/)

Webpack é um bundler modular para aplicações JS. Basicamente, ao processar uma aplicação, o webpack identifica quais as dependências do mesmo (Módulos, estilos, imagens...) e gera um ou mais bundles para servir ao projeto. Por ser modular, é possível adicionar plugins ao processamento, conforme forem necessários. [Good read sobre babel e webpack, razoavelmente curto](https://www.tezify.com/post/babel-and-webpack-fundamentals/)

### Features incluídas

#### [PostCSS](https://postcss.org/)

Ferramenta que manipula o CSS via JS, utilizando diversos plugins. Entre seus principais plugins, existe o `autoprefixer`, que adiciona prefixos nas propriedades quando necessários para compatibilidade cross-browser, por exemplo, compila

`box-shadow: 1px 1px black;`

em:

```

box-shadow: 1px 1px black;

-webkit-box-shadow: 1px 1px black;

```

#### [Babel](https://babeljs.io/)

Transforma 'next-gen' JS em uma versão mais antiga para ser compatível com todos os browsers. Exemplo:

```

const word1 = "Lorem";

const word2 = "Ipsum";

let word3 = "This is a ${word1} ${word2} example!";

```

Ao ser compilado, se tornaria:

```

var word1 = "Lorem";

var word2 = "Ipsum";

var word3 = "This is a " + word1 + " " + word2 + " example!";

```

#### [SASS](https://sass-lang.com/)

SASS é um preprocessor de CSS, que possibilita o uso de algumas features próprias como mixins, variáveis, funções, entre outros, que posteriormente são transpilados em CSS. Preferível o uso de SCSS ao invés de SASS, por ser bem mais similar ao CSS. Exemplo:

```

$myColor = #FF11AA;

$mySize = 12px;

.example-div {

h1 {

color: $myColor;

}

p {

font-size: 12px;

}

}

```

Ao ser compilado:

```

.example-div h1 {

color: #FF11AA;

}

.example-div p {

font-size: 12px;

}

```

#### ~~[Typescript](https://www.typescriptlang.org/)~~

A ser adicionado posteriormente

###

## Instalação

1. Clonar este repositório

2) Instalar **[Node.js](https://nodejs.org/en/)**

3. Instalar **[Yarn](https://yarnpkg.com/)** utilizando o comando `npm install -g yarn`

4) Executar no terminal dentro da pasta do repositório clonado: `yarn install`. Este comando vai instalar todas as dependências do projeto, declaradas no `package.json`

## Utilização

### Servidor de desenvolvimento

Para inicializar o servidor de desenvolvimento, deve ser executado o comando `yarn start`. O servidor de desenvolvimento poderá ser acessado via `localhost:8080`. Plugin utilizado: [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

### Build de produção

Para gerar uma build de produção, deve ser executado o comando `yarn build`. Os arquivos gerados ficarão armazenados na pasta `/dist`.

## Desenvolvimento

Durante o desenvolvimento, tudo deverá ser feito na pasta `/src`, que está divido em diversas subpastas (apenas uma sugestão de esquema de divisão)

### Esquema de pastas do repositório

- `/src` Contém os arquivos utilizados no desenvolvimento

- Arquivos .html

- `/assets` Contém os assets necessários para o site.

  - `/fonts` Fontes (.ttf, .woff, .eot, .otf)

  - `/images` Imagens (.png, .svg, .ico, .gif, .jpg, .jpeg, .webp)

  - `/styles` Styles (.scss, .css), seguindo [7-1 pattern](https://sass-guidelin.es/#architecture) (7 folders, 1 file)

    - `abstracts`: Helpers em geral (functions, mixins, variables...)

    - `base`: Base do projeto, com alguns estilos padrões, normalizações, tipografias

    - `components`: Estilos para componentes específicos (carousels, buttons, dropdowns...)

    - `layout`: Estilos para partes importantes, mais 'macro' do que `components` (navbar, footer, header...)

    - `pages`: Estilos específicos para cada página

    - `themes`: Caso tenha mais de um tema para o site

    - `vendors-extensions`: Override de alguns estilos de vendors (ex: customizar o form-control do bootstrap)

  - `/js` Javascripts (.js)

    - `/modules` Módulos

- `/public` Contém os arquivos extras que desejar mover para produção

- `/dist` Pasta preenchida somente após o comando de build. Contém os arquivos de produção.

- `/node_modules` Pasta gerada após instalação. Contém os pacotes node.

### Instalação de pacotes

Pacotes podem ser adicionados utilizando o Yarn. Anteriormente era utilizado o `npm`, mas por questões de performance, foi substituido pelo `yarn`. Os pacotes são os mesmos existentes no `npm`. Por exemplo, para instalar o pacote jquery:

`yarn add jquery`

(Adicionar a flag `--dev` ou `-D` caso for uma dependência apenas para desenvolvimento).

### Passo-a-passo da compilação

Ao executar `yarn start`:

1. Geração das hashes necessárias (para evitar problemas de cache)

2. Limpeza das pastas de build (no modo desenvolvimento, os arquivos são buildados na memória ao invés do disco, tornando o processo mais rápido. Por causa disso a pasta dist sempre estará vazia no modo dev)

3. Cópia dos arquivos da pasta `/public` para build

4. Criação dos .html a serem servidos.

- Busca todos os arquivos .js na pasta `.js`. Cada um terá seu próprio .html na build.

* Busca os templates correspondentes aos arquivos .ts do passo anterior na pasta `/src`. Caso não seja encontrado, o .html gerado seguirá o template padrão `template.html`

- Busca os módulos necessários e adiciona hashes neles, antes de copiá-los para build.

* Adiciona os imports nos .html, com as hashes geradas anteriormente.

5. Host da build em `localhost:8080`. Mudanças feitas a partir de então serão atualizadas toda vez que qualquer arquivo for atualizado.

## Sugestões de libs

### Validation

- **[ParsleyJS](https://parsleyjs.org/)**: Lib bem completa de validações, mas com alguns downsides. Primeiramente, requer o jQuery instalado globalmente, o que afeta features do webpack como o [tree shaking](https://webpack.js.org/guides/tree-shaking/). Ainda sobre isso, ela depende inteiramente do JQuery, o que pode ser um empecilho caso eventualmente haja uma transição para um JS Framework (Angular, React, Vue, etc)

### Masking

- **[Inputmask](https://github.com/RobinHerbots/Inputmask)**: Cobre a grande maioria das masks possivelmente necessárias.

* **[Cleave.js](https://nosir.github.io/cleave.js/)**: Boa lib para complementar a inputmask, ou substituí-la em alguns casos, notávelmente para mask de cartão de crédito.

### Select

- **[SlimSelect](https://slimselectjs.com/)**: Lib bem completa e customizável, acredito ser uma alternativa superior ao select2, por não ter dependências e ser mais leve, mantendo as funcionalidades.

### Animation

- **[GSAP](https://greensock.com/gsap/)**: Possivelmente a lib de animação mais completa e com maior suporte técnico, provavelmente preferível para animações large-scale

* **[Anime.js](https://animejs.com/)**: Escolhida até o momento por ser bem mais leve e com métodos/funções mais fáceis de usar comparadas ao GSAP, sem perder a fluidez nas animações.

### Random Stuff

- **[Slick](https://kenwheeler.github.io/slick/)**: Criação de carousel, bem simples de utilizar e diversas funcionalidades

* **[Pretty Checkbox](https://github.com/lokesh-coder/pretty-checkbox)**: Permite customizar checkboxes de diversas maneiras.

- **[Voca](https://vocajs.com/)**: Lib para manipulação de strings, bem mais clean em geral do que funções nativas do JS

* **[Premonish](https://mathisonian.github.io/premonish/)**: Consegue inferir a qual elemento o usuário está indo clicar de acordo com o movimento do mouse (Talvez tenha alguns usos legais)

- **[Animate On Scroll](https://michalsnik.github.io/aos/)**: Gera animações (ex. fadeIn, fadeOut) conforme o usuário vai dando scroll pela página

## Libs já instaladas

- **[jQuery](https://jquery.com/)** - Talvez gere problemas caso eventualmente haja a transição para o uso de um framework JS.

- **[Bootstrap](https://getbootstrap.com/)** - Atualmente está na versão 4.x, mas sua versão v5.x já está em suas primeiras versões de teste. Entre suas mudanças mais notáveis, não terá mais o jQuery como dependência e **não suportará mais o Internet Explorer**.

- **[PopperJS](https://popper.js.org/)** - Dependência do Bootstrap. Está sendo usada uma versão legado v1.x, porque a atual v2.x não suporta IE11.

- **[Font Awesome Pro](https://fontawesome.com/)** - Sugiro caso possível baixar cada um dos assets que serão utilizados, ao invés de usar a lib inteira, que é notávelmente pesada. Por hora, a lib está instalada.

- **[ParsleyJS](https://parsleyjs.org/)**

- **[Inputmask](https://github.com/RobinHerbots/Inputmask)**

- **[Cleave.js](https://nosir.github.io/cleave.js/)**

- **[Anime.js](https://animejs.com/)**

- **[SlimSelect](https://slimselectjs.com/)**

## Adaptando um projeto já existente ao webpack

- Checar se todas as libs utilizadas tem suporte para módulos. Caso não houver, será necessário procurar por libs alternativas (A grande maioria das libs atuais já tem suporte)

- Code splitting

- Cada página deverá ter seu próprio .js (com nome igual ao .html que o corresponde)

- Um arquivo `functions.js` usado por vários outros .js, por exemplo, terá que ser adaptado para utilizar módulos (exportação e importação conforme necessário)

- CSS precisa ser passado pra SCSS. Para isso basta copiar todo o conteúdo do CSS para dentro do main.scss, porém, é recomendado dividir o código para facilitar alterações futuras.

## Problemas encontrados

- Select2

  - Problemas ao mudar language para 'pt-BR'. Workaround: Instalar o jquery globalmente. Não óptimo, pois adicionaria o jquery até em bundles onde não seria necessário, mas visto que em um projeto usando jquery já o utiliza em todas as páginas, não é problemático;

  - [Compatibilidade com PurgeCSS](#css-problems-in-production)

- Toastr

  - [Compatibilidade com PurgeCSS](#css-problems-in-production)

## Problemas comuns (?)

### Importando imagens

- Imagens podem ser adicionadas no próprio html, usando `<img src="assets/images/img_test.png"/>` normalmente. No entanto, para adicionar essa mesma imagem dentro do JS, é necessário importá-la primeiro usando `import myImage from '../images/img_test.png'` (path relativo ao JS) e então `myImage` passará a armazenar o path correto para a imagem. Para finalmente adicionar a imagem, precisa é necessário substituir o path por `myImage`. Exemplo (dentro do JS): `'<img src="'+myImage+'">'`

### CSS quebrado em produção

- Problema provavelmente causado pelo PurgeCSS não conseguindo identificar o uso de algumas libs. Workaround: Adicionar o prefixo utilizado nas classes da lib no whitelistPatterns do PurgeCSS, em `config/webpack.prod.js`. [Documentação sobre whitelist](https://purgecss.com/whitelisting.html#specific-selectors)
