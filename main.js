// Criação de variáveis:
const dc = ["batman", "superman", "wonder woman","arlequina","joker"]
var palavraSorteada
const alfabeto = 'abcdefghijklmnopqrstuvwxyzç'
var letraInformada
var erroMostra = ''
var errosCount = 0
// A constante abaixo contém o desenho do boneco da forca em formato de texto:
const arrErros = ['0\n', '0\n/\n', '0\n/|\n', '0\n/|\\\n', '0\n/|\\\n/\n', '0\n/|\\\n/\\\n']
var numeroSorteado
var countAcertos = 0
var mascChar = ''
var palpites = ''

// Sorteio do número para escolha da palavra:
numeroSorteado = Math.floor(Math.random()*dc.length)
console.log('Número sorteado: ' + numeroSorteado)
palavraSorteada = dc[numeroSorteado]
console.log('Palavra sorteada: ' + palavraSorteada)


// Criando a máscara da palavra:
for(let i = 0; i < palavraSorteada.length; i++) {

    if(palavraSorteada[i] == ' ') {
        mascChar += ' '
    } else {
        mascChar += '?'
    }

}


//Iniciando o jogo
alert('O tema é DC COMICS!')



// O jogo roda aqui:
for(; errosCount <= arrErros.length && countAcertos < palavraSorteada.length;) {

    letraInformada = prompt(`${mascChar}\nDigite uma letra do alfabeto para tentar adivinhar a palavra: \n${erroMostra}`)

    revelaMascara()

    // Verificação de vitória ou derroa:
    if(errosCount > arrErros.length) {
        alert('Game Over!')
        location.reload()
    } else if(countAcertos >= palavraSorteada.length) {
        alert('Você ganhou!')
        location.reload()
    }

}



// Funções para o jogo: 
function revelaMascara() {

    // Verifica se contém alguma letra:
    if(letraInformada.length < 1) {
        alert('Digite uma letra!')
        return
    }

    // Verifica se tem mais de uma letra:
    if(letraInformada.length > 1) {
        alert('Digite apenas uma letra!')
        return
    }

    // Verifica se foi digitado um caracter que não esteja no alfabeto:
    if(!letraInformada.includes(alfabeto)) {
        alert('Digite uma letra do alfabeto!')
        return
    }

    // Verifica se a letra já foi dita anteriormente:
    if(palpites.includes(letraInformada)) {
        alert('Você já falou essa letra!')
        erroMostra = arrErros[errosCount]
        errosCount++
        return
    }

    // Aqui roda a parte da máscara da palavra, onde substitui caso a letra informada exista dentro da palavra:
    if(palavraSorteada.includes(letraInformada)) {

        countAcertos++
        
        for(let i = 0; i < palavraSorteada.length; i++) {
            
            
            if(palavraSorteada[i] == letraInformada) {
                
                mascChar = mascChar.substring(0, i) + letraInformada + mascChar.substring(i + 1)
                palpites = palpites.substring(0, i) + letraInformada + palpites.substring(i + 1)
                console.log('Atualização da máscara: ' + mascChar, '\nLetra informada:' + letraInformada, '\nÍndice para verificação de cada letra: ' + i, '\nLetras já ditas anteriormente: ' + palpites)
            }
        }
    }else {
        
        palpites = palpites.substring(0, i) + letraInformada + palpites.substring(i + 1)
        erroMostra = arrErros[errosCount]
        errosCount++
    }

    console.log('Erros: ' + errosCount)

    // Realiza a contagem de letras certas para saber se ganhou o jogo dentro do laço no começo do código:
    for(var i = 0; i < palavraSorteada.length; i++) {

        if(mascChar[i] == palavraSorteada[i]) {
            countAcertos++
        }else {

            countAcertos = 0
        }
    }

    console.log('Acertos: ' + countAcertos)

}