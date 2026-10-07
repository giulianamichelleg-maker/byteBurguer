const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let products = [];
let nextProductId = 1;

let orders = [];
let nextOrder = 1;

function registerProduct() {
    rl.question("Nome do seu produto: ", (name) => {
        rl.question("Digite a categoria do produto: ", (category) => {
            rl.question("Digite o preço do produto: ", (price) => {

                product = {

                    id: nextProductId,
                    name: name,
                    category: category,
                    price : price,
                    avalaible : true

                }

                products.push(product);
                nextProductId++

                console.log("Produto cadastrado com sucesso.");

                showMenu()
                return

                rl.close()

            });
        });
    });
};

function listProducts() {

    if (products.length === 0) {
        console.log("Nenhum produto cadastrado.")
        showMenu()
        return
    }

    for (let i = 0; i < products.length; i++) {

        console.log("PRODUTOS CADASTRADOS NO SISTEMA")
        console.log("-------------------------------")
        console.log("ID: ", product[i].nextProductId);
        console.log("Nome do produto: ", product[i].name);
        console.log("Categoria: ", category);
        console.log("Preço: ", price);
        console.log("Disponivel: ", avalaible);

        showMenu();
        return

    }

}

function showMenu() {

    console.log("==================")
    console.log(" BYTEBURGER ")
    console.log("==================")

    console.log("\nCARDÁPIO")

    console.log(" 1 - Cadastrar produto")
    console.log(" 2 - Listar produtos")
    console.log(" 3 - Buscar produto")
    console.log(" 4 - Atualizar produto")
    console.log(" 5 - Remover produto")
    console.log(" 6 - Alterar disponibilidade")

    console.log("\nPEDIDOS")

    console.log(" 7 - Criar pedido")
    console.log(" 8 - Adicionar produto ao pedido")
    console.log(" 9 - Visualizar pedido")
    console.log(" 10 - Remover item do pedido")
    console.log(" 11 - Alterar quantidade")

    console.log("\nFINALIZAÇÃO")

    console.log(" 12 - Finalizar pedido")
    console.log(" 13 - Cancelar pedido")
    console.log(" 14 - Listar pedido")
    console.log(" 15 - Listar pedidos abertos")

    console.log("\nRELATÓRIOS")

    console.log(" 16 - Mostrar faturamento")
    console.log(" 17 - Produto mais vendido")

    console.log(" 0 - Sair")

    rl.question("Digite uma opção: ", (opcao) => {

        if (opcao === "1") {
            registerProduct()
        } else if (opcao === "2") {
            listProducts()
        } else if (opcao === "3") {

        } else if (opcao === "4") {

        } else if (opcao === "5") {

        } else if (opcao === "6") {

        } else if (opcao === "7") {

        } else if (opcao === "8") {

        } else if (opcao === "9") {

        } else if (opcao === "10") {

        } else if (opcao === "11") {

        } else if (opcao === "12") {

        } else if (opcao === "13") {

        } else if (opcao === "14") {

        } else if (opcao === "15") {

        } else if (opcao === "16") {

        } else if (opcao === "17") {

        } else if (opcao === "0") {
            console.log("Encerrando sistema...")

            rl.close()

        } else {
            console.log("Opção inválida.")

            showMenu()
        }
    })
}
