// Classe Consumidor
class Consumidor {
    nome: string;
    idade: number;
    email: string;

    // Construtor
    constructor(nome: string, idade: number, email: string) {

        // Validação do nome
        if (nome.trim() === "") {
            throw new Error("O nome não pode estar vazio!");
        }

        // Validação da idade
        if (!Number.isInteger(idade) || idade < 0) {
            throw new Error("A idade deve ser um número inteiro positivo ou zero!");
        }

        // Validação do email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("Email inválido!");
        }

        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    // Método para exibir os dados
    exibirDados(): string {
        return `Consumidor: ${this.nome} (${this.idade} anos) - ${this.email}`;
    }
}


// Classe responsável pelas análises estatísticas
class AnaliseConsumidores {

    // Método para calcular a média das idades
    static calcularMediaIdade(consumidores: Consumidor[]): number {

        if (consumidores.length === 0) {
            return 0;
        }

        const somaIdades = consumidores.reduce(
            (total, consumidor) => total + consumidor.idade,
            0
        );

        return somaIdades / consumidores.length;
    }

    // Método para encontrar o consumidor mais velho
    static obterMaisVelho(consumidores: Consumidor[]): Consumidor | undefined {

        if (consumidores.length === 0) {
            return undefined;
        }

        return consumidores.reduce((maisVelho, consumidor) =>
            consumidor.idade > maisVelho.idade ? consumidor : maisVelho
        );
    }

    // Método para encontrar o consumidor mais novo
    static obterMaisNovo(consumidores: Consumidor[]): Consumidor | undefined {

        if (consumidores.length === 0) {
            return undefined;
        }

        return consumidores.reduce((maisNovo, consumidor) =>
            consumidor.idade < maisNovo.idade ? consumidor : maisNovo
        );
    }
}


// Array para armazenar os consumidores
const listaConsumidores: Consumidor[] = [];


// Cadastro dos consumidores
listaConsumidores.push(new Consumidor("Ana Silva", 30, "ana@email.com"));
listaConsumidores.push(new Consumidor("Carlos Souza", 22, "carlos@email.com"));
listaConsumidores.push(new Consumidor("Mariana Lima", 45, "mariana@email.com"));
listaConsumidores.push(new Consumidor("Roberto Alves", 19, "roberto@email.com"));
listaConsumidores.push(new Consumidor("Fernanda Dias", 33, "fernanda@email.com"));


// Exibição dos consumidores
console.log("=== LISTA DE CONSUMIDORES ===");

listaConsumidores.forEach(consumidor => {
    console.log(consumidor.exibirDados());
});


// Análise estatística
console.log("\n=== ANÁLISE ESTATÍSTICA ===");

// Média das idades
const media = AnaliseConsumidores.calcularMediaIdade(listaConsumidores);

console.log(`Média das Idades: ${media.toFixed(1)} anos`);


// Consumidor mais velho
const maisVelho = AnaliseConsumidores.obterMaisVelho(listaConsumidores);

if (maisVelho) {
    console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
}


// Consumidor mais novo
const maisNovo = AnaliseConsumidores.obterMaisNovo(listaConsumidores);

if (maisNovo) {
    console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
}