import { helloWorld } from "./hello";
import { RandomNumbers, pi,returnPI,phi } from "./math";

function calcularArea() {
    const obj = {width: 10, height: 30};
    
    const area = obj.width * obj.height;

    return area;
}

function usuario() {
    const usuario = {
        nome: "Renato",
        idade: 40
    }
}

function calculo() {
    return Math.random() < 5;
}

function validacao() {
    const valor = Math.random() < 0.5 ? 'a' : 'b';

    if (valor === 'a') {
        //..

    } else if (valor === 'b') {
        //...
    }
}

function exibirMensagem(pessoa: string, data: string): string {

    console.log(`Olá ${pessoa}, hoje é ${data}`);

    return 'Teste';
}

exibirMensagem('Renato', '30/01/2024');

let mensagem: string = 'hello world';

let mensagem2 = 'hello world';

let number1: number = 3.3;

let number2 = 4;

let obj:any = {x: 0};

let isTrue: boolean = false;

function olaMundo(mensagem:string): string {

    return `Olá Mundo ${mensagem};`
}

function exibirCoordenadas(pt: {x: number, y: number}): string {

    return `${pt.x} ${pt.y}`;
}

exibirCoordenadas({x:4, y: 6});

function exibirNome(obj: {nome:string, sobrenome?:string}): string {

    let mensagem = '';

    if (obj.sobrenome === undefined) {
        mensagem = `Seu nome é ${obj.nome}`;
    }
    else
    {
        mensagem = `Seu nome é ${obj.nome} e o sobrenome é ${obj.sobrenome}`;
    }

    return mensagem;
}

exibirNome({nome: 'Renato'});

exibirNome({nome: 'Renato', sobrenome: 'Gava'});

function exibirIds(id: number | string) {

    let mensagem = '';

    if (typeof id === 'number') {
        mensagem = 'o seu id numérico é ' + id.toString();
    }
    else {
        mensagem = id.toUpperCase();
    }

    return mensagem;
}

exibirIds(3);

exibirIds('345');

interface Ponto {
    x: number,
    y: number
}

function imprimirPonto(p: Ponto) {

    return `O seu ponto é ${p.x} ${p.y}`;

}

imprimirPonto({x: 3, y: 5});

function imprimirTexto(texto: string, alinhamento: 'left' | 'right' | 'center') {

}

imprimirTexto('meu texto', 'left');

var teste = null;

console.log(teste);

var teste2;

console.log(teste2);

function vivendoPerigosamente(x?: number | null) {
    console.log(x?.toFixed());
}

vivendoPerigosamente();

function fazerAlgo(lista: Array<string>) {

}

function fazerAlgoTambém(lista: string[]) {

}

fazerAlgo(new Array('hello', 'world'));

fazerAlgoTambém(['hello', 'world']);

class Point {
    x: number = 0;
    y: number = 0;
}

let p = new Point();
p.x = 4;
p.y = 4;

console.log(`${p.x} ${p.y}`);

class BoasVindas {
    mensagem: string;

    constructor() {
        this.mensagem = 'Bem-vindo!';
    }
}

let m = new BoasVindas();

console.log(m.mensagem);

class Saudacoes {
    readonly mensagem: string;

    constructor() {
        this.mensagem = 'Muito bem-vindo!';
    }

    dizerOla() {
        console.log(this.mensagem)
    }
}

let s = new Saudacoes();

class C {
    private _length = 0;

    sum: number = 0;

    get length(): number {

        if (this.length > 0)
            return 100;
        else
            return this._length;
    }

    set length(value: number) {

        if (value > 10)
            this._length = value;
    }
}

let c = new C();

c.length = 100;

console.log(c.length);

interface Pingavel {
    ping(): void;
    value: number
}

class Sonar implements Pingavel {

    ping(): void {
        console.log('ping');
    }

    value: number = 3;
}

class Ball implements Pingavel {

    ping(): void {

    }

    value: number = 4;
}

let sonar = new Sonar();

sonar.ping();

class Animal {
    protected andar() {
        console.log('animal andando');
    }

    constructor() {
        this.andar();
    }
}

class Cachorro extends Animal {
    public latir() {
        console.log('au au');

        this.andar();
    }

    constructor() {
        super();
        this.latir();
    }
}

let viraLata = new Cachorro();

helloWorld();

let r = new RandomNumbers();

console.log(pi);