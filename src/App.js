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
  })

  function handleAddRepository() {
    setRepositories([...repositories, `Projeto ${Date.now()}`])
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
