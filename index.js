function exibirModal() {
    var modal = document.getElementById("meuModal");
    modal.style.display = "block";
    var fechar = document.getElementById("fecharModal");
    fechar.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    const originalUrl = document.getElementById('originalUrl').value;

      const accessToken = 'b700053108ce1d818ce9cf7ab0da9c91c6e53760';
      const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          long_url: originalUrl
        })
      })
      .then(response => response.json())
      .then(data => {
        const shortenedUrl = data.link;
        document.getElementById('shortenedUrl').innerHTML = `<a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>`;
      })
      .catch(error => {
        console.error('Erro ao encurtar o link:', error);
      });
}
document.getElementById("botao-copiar").addEventListener("click", function() {
    var texto = document.getElementById("shortenedUrl").innerText;
    
    navigator.clipboard.writeText(texto).then(function() {
      alert("Texto copiado!");
    }).catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
  });
