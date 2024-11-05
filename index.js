/*

    Tarefas: 
    1 - pegar os valores dos inputs~
    2 - validar os valores dos inputs se forem iguais a os usuarios existentes no banco de dados
    3 -  redirecionar para a pagina especifica de cada usuario
    4 - caso o usuario não exista, exibir uma mensagem de erro

*/

const usuarios = ["ale@cesupa.br", "pedro@giroto.com", "isaac@java.com"];
const senhas = ["123123", "223344", "asdasd"];
const redirecionamentos = [
    "https://www.cesupa.br/",
    "https://www.detran.pa.gov.br/index_.php#",
    "https://www.idopterlabs.com.br/"
];

function logar(event) {
    event.preventDefault(); // Evita o envio do formulário
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    let usuarioEncontrado = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i] === email && senhas[i] === senha) {
            window.location.href = redirecionamentos[i];
            usuarioEncontrado = true;
            break;
        }
    }

    if (!usuarioEncontrado) {
        alert("Usuário ou senha inválidos");
    }
}