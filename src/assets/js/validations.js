/* Testando diferentes libs para validação
   - Parsleyjs: não tem suporte pronto para modules ou typescript
   - Validate.js: Possível
   - v8n: Funciona, porém sem definições de typescript. Não cria problemas, porém cria warnings na compilação.

   No momento estou testando a lib https://github.com/trevorr/tsfv, que é baseada na v8n com algumas funcionalidades extras. 
*/

import '../styles/main.scss'

import 'popper.js';
import 'bootstrap';
import $ from 'jquery';

import {initPage} from './modules/initPage';

$(() => {
    initPage();
});