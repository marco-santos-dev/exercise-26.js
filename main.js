// 26. Carrinho de compras. Leia os preços dos produtos até que o usuário digite "fim". Exiba a quantidade de itens, o produto mais caro e o total. Se o total ultrapassar R$ 300, aplique 10% de desconto.

let itemCount = 0;
let total = 0;
let highestPrice = 0;

while (true) {
    const userInput = prompt("Digite o preço do produto ou 'fim' para encerrar:");

    if (userInput === null || userInput.toLowerCase() === "fim") {
        break;
    }

    const productPrice = Number(userInput);

    if (!Number.isFinite(productPrice) || productPrice <= 0) {
        console.log("Preço inválido. Tente novamente.");
        continue;
    }

    itemCount++;
    total += productPrice;

    if (productPrice > highestPrice) {
        highestPrice = productPrice;
    }
}

let discount = 0;

if (total > 300) {
    discount = total * 0.10;
}

const finalTotal = total - discount;

console.log(`Quantidade de itens: ${itemCount}`);
console.log(`Produto mais caro: R$ ${highestPrice.toFixed(2)}`);
console.log(`Desconto: R$ ${discount.toFixed(2)}`);
console.log(`Total da compra: R$ ${finalTotal.toFixed(2)}`);