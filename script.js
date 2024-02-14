function codificar() {
    let textoOriginal = document.getElementById('texto').value;
    let textoCriptografado = verificarCodificar(textoOriginal);
    if (textoCriptografado) {
      document.getElementById('saida').textContent = textoCriptografado;
        } else {
      document.getElementById('saida').textContent = 'Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.';
    }
  }
  
  function decodificar() {
    let textoCriptografado = document.getElementById('texto').value;
    let textoOriginal = verificarDecodificar(textoCriptografado);
    if (textoOriginal) {
      document.getElementById('saida').textContent = textoOriginal;
      } else {
      document.getElementById('saida').textContent = 'Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.';
    }
  }
  
  function verificarCodificar(texto) {
    if (!/^[a-z\s]+$/.test(texto)) return null; 
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
  }
  
  function verificarDecodificar(texto) {
    if (!/^[a-z\s]+$/.test(texto)) return null;
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
  }
  
  function copiarTexto() {
    let textoCopiado = document.getElementById('saida').value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
      alert('Texto copiado!');
    });
  }