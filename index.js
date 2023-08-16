document.getElementById("login-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim(); // Remover espaços em branco
  const password = document.getElementById("password").value;

  if (username === "Isaac" && password === "17/08/2022") {
    // Redirecionar para a próxima tela
    window.location.href = "2-select.html";
  } else {
    // Exibir mensagem de erro
    document.getElementById("error-message").innerText = "Tente novamente:(";
  }
});
