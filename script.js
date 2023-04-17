var input1 = document.querySelector('textarea#txt-area1');
var input2 = document.querySelector('textarea#txt-area2');
var message = document.getElementById("msg");

var button1 = document.querySelector('button.btn-1');
button1.onclick = criptografar;

var button2 = document.querySelector('button.btn-2');
button2.onclick = descriptografar;

document.getElementById('none').innerHTML = '';
input1.focus();

function criptografar() {    
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        input1.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        
        var text = input1.value;
        var txt = text.replace(/e/igm, 'enter')
                      .replace(/i/igm, 'imes')
                      .replace(/a/igm, 'ai')
                      .replace(/o/igm, 'ober')
                      .replace(/u/igm, 'ufat');
        document.getElementById('txt-area2').innerHTML = `${txt}`;       
        
        document.getElementById('copiar').innerHTML = '<button class="button btn-3" onclick="copiar()">Copiar</button>';       
    }
}

function descriptografar() {
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = ' <h2 id="none">Nenhuma mensagem encontrada</h2>';
        document.querySelector('img.icone').style.display;
        input1.focus();
    } else {        
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('txt-area1').innerHTML = '';
       
        var text = input1.value;
        var txt = text.replace(/enter/igm, 'e')
                      .replace(/imes/igm, 'i')
                      .replace(/ai/igm, 'a')
                      .replace(/ober/igm, 'o')
                      .replace(/ufat/igm, 'u');
        document.getElementById('txt-area2').innerHTML = `${txt}`;     
        
        document.getElementById('copiar').innerHTML = '<button class="button btn-3" onclick="copiar()">Copiar</button>';
    }
}

function copiar() {
    const text = document.querySelector('#txt-area2').value;
    navigator.clipboard.writeText(text).then(function() {
        message.innerHTML = "O texto copiado já está na área de transferência!";        
        document.querySelector("#txt-area1").value = "";        
    }, function() {
        alert('Não foi possível copiar o texto para a área de transferência');
    });
}
