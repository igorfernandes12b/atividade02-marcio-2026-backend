import express from 'express'
import connection from './db.js'

const router = express.Router()

router.get('/produtos', (req, res) => {
  const sql = 'SELECT * FROM igor_mercadoLivre'

  connection.query(sql, (error, results) => {
    res.json(results)
  })
})

router.post('/produtos', (req, res) => {
  const { nome, preco, descricao, categoria, tipo } = req.body

  const sql = `
    INSERT INTO igor_mercadoLivre 
    (nome, preco, descricao, categoria, tipo)
    VALUES (?, ?, ?, ?, ?)
  `

  connection.query(sql, [nome, preco, descricao, categoria, tipo], () => {
    res.json({ mensagem: 'Produto cadastrado com sucesso' })
  })
})

export default router