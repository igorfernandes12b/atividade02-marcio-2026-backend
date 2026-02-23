const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const formData = new FormData(form)

  const dados = {
    nome: formData.get('nome'),
    preco: formData.get('preco'),
    descricao: formData.get('descricao'),
    categoria: formData.get('categoria'),
    tipo: formData.get('tipo')
  }

  fetch('http://localhost:3333/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(() => {
    alert('Produto cadastrado com sucesso')
    form.reset()
  })
})