fetch('http://localhost:3333/produtos')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista')

    lista.innerHTML = ''

    data.forEach(produto => {
      lista.innerHTML += `
        <div class="card">
          <h3>${produto.nome}</h3>
          <p class="preco">R$ ${produto.preco}</p>
          <p>${produto.descricao}</p>
          <p><strong>Categoria:</strong> ${produto.categoria}</p>
          <p><strong>Tipo:</strong> ${produto.tipo}</p>
        </div>
      `
    })
  })