import React, { useState, useEffect } from 'react'
import appi from './services/api'

import './App.css'

import Header from './components/Header'
import api from './services/api'

function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('repositories')
      .then(response => setRepositories(response.data))
  }, [])

  async function handleAddRepository() {
    const data = {
      title: 'Teste',
      techs: ['Tecnologia 1', 'Tecnologia 2'],
      url: 'http://teste.com/teste'
    }

    const response = await api.post('repositories', data)

    return setRepositories([...repositories, response.data])
  }

  return (
    <>
      <Header title="Repositories" />

      <ul>
        {repositories.map(repository => <li key={repository.id}>{repository.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddRepository}>
        Adicionar repositório
      </button>
    </>
  )
}

export default App
