import {Validation} from 'tsfv';
import $ from 'jquery';


/* Função para checar se uma string é um cpf. Retorna true caso positivo. */

const isCpf = (value) => {
    let val = $.trim(value);
    val = val.replace('.', '');
    val = val.replace('.', '');
    let cpf = val.replace('-', '');
    while (cpf.length < 11) cpf = "0" + cpf;
    let expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
    let a = [];
    let b = 0;
    let c = 11;
    for (let i = 0; i < 11; i++) {
        a[i] = parseInt(cpf.charAt(i));
        if (i < 9) b += (a[i] * --c);
    }
    let x = b % 11;
    if (x < 2) {
        a[9] = 0
    } else {
        a[9] = 11 - x
    }
    b = 0;
    c = 11;
    for (let y = 0; y < 10; y++) b += (a[y] * c--);
    if ((x = b % 11) < 2) {
        a[10] = 0;
    } else {
        a[10] = 11 - x;
    }

    let result = true;
    if ((parseInt(cpf.charAt(9)) != a[9]) || (parseInt(cpf.charAt(10)) != a[10]) || cpf.match(expReg)) result = false;

    return result;
}

Validation.prototype.cpf = function() {
    return this.withRule({
        id: 'cpf',
        describe: () => 'cpf brasileiro',
        test: v => isCpf(v)
    });
}