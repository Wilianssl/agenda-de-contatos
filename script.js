const conteudo = document.getElementById('content')
const botao = document.getElementById('btn')
let tab
const contatos = []

function criarElemento() {

    const nome = document.getElementById('name')
    const contato = document.getElementById('contact')
    if (contatos.includes(contato.value)){
        alert('Esse contato já existe!')
    } else {
        contatos.push(contato.value)
        const tabelaColuna = document.createElement('tr')
        const linhaNome = document.createElement('td')
        linhaNome.textContent = nome.value
        const linhaContato = document.createElement('td')
        linhaContato.textContent = contato.value
        tabelaColuna.append(linhaNome)
        tabelaColuna.append(linhaContato)
        conteudo.append(tabelaColuna)
    }

    nome.value = ''
    contato.value = ''
}

botao.addEventListener('click', criarElemento)