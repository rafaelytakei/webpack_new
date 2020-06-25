# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2020-06-20

### Added

- Começando a manter um log de mudanças no arquivo CHANGELOG.md

- `yarn` como substituto ao `npm`. Em geral é mais rápido e tem features não existentes no npm. [Comparação](https://stackshare.io/stackups/npm-vs-yarn)

- ESLint agora está configurado para ser executado on-save no VSCode, seguindo a configuração sugerida pela Airbnb (Mais utilizada atualmente). [npm](https://www.npmjs.com/package/eslint-config-airbnb)

- Prettier configurado para funcionar corretamente com o ESLint, afim de manter um padrão no código entre os desenvolvedores. Bascamente o Prettier cuida da formatação, e o ESLint cuida da qualidade do código, com boas práticas e checagens de semântica.

- Pasta `.vscode`, que define extensões recomendadas para o workspace, além de algumas settings, principalmente o de auto-format on-save, que servirá para executar o prettier/eslint.

- Novos scripts para o yarn, que podem ser utilizados para checar a performance da build.

  - `yarn devspeed` -> Faz uma build de desenvolvimento com um log do tempo tomado por cada loader

	- `yarn buildspeed` -> Faz uma build de produção com um log do tempo tomado por cada loader
- Teste de cacheDirectory no babel-loader para melhorar performance de rebuild.

- Suporte à lib ParsleyJS.

### Changed

- Vide mudança do `npm` para `yarn`,  as chamadas para os scripts para build mudaram.

  - `npm start` -> `yarn dev` (mudado de start para dev porque faz mais sentido)

	- `npm run build` -> `yarn build`

### Removed

- `postcss` removido da build de desenvolvimento, não fazia muito sentido estar lá, e tem um peso considerável no tempo de build

- `eslint` removido dos loaders para arquivos `.js`. Agora o linting é feito via ESLint separadamente do webpack

- `package.lock.json` removido da raiz, pois não é mais necessário já que foi feita a transição para o yarn.

## [0.1.0] - 2020-06-03

- Adicionando uso de aliases ao template, que permite o uso de relative paths abstratos

- Testes iniciais com ESLint

## [0.0.3] - 2020-06-01

- Adicionando seção de problemas comuns ao README

## [0.0.2] - 2020-05-27

### Added

- Adicionando `resolve-url-loader`, que faz com que paths dentro de .scss sejam relativos ao próprio documento, ao invés de relativo ao main.scss

## [0.0.1] - 2020-05-21

### Added

- Adicionando plugin `html-loader` para carregar imagens direto do .html

- Adicionando font-awesome-pro ao boilerplate

### Changes

- Melhorando estrutura do README

- Deixando alguns usos de importação de imagem e uso dos templates .html mais claros no template