fetch('http://localhost:3333/produtos')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista')

    data.forEach(produto => {
      lista.innerHTML += `
        <div class="card">
          <h3>${produto.nome}</h3>
          <p><strong>Preço:</strong> R$ ${produto.preco}</p>
          <p>${produto.descricao}</p>
          <p><strong>Categoria:</strong> ${produto.categoria}</p>
          <p><strong>Tipo:</strong> ${produto.tipo}</p>
        </div>
      `
    })
  })