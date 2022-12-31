import { useEffect, useState } from 'react';

type repository = {
  full_name: string;
  description: string
}

function App() {
  const [repo, setRepo] = useState<repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/srnascimento40/repos')
      .then(response => response.json())
      .then(data => {
        setRepo(data)
      })
  }, [])


  return (
    <div className="App">
      <h1>basic form of fetching</h1>
      <ul>
        {repo.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name.split('SrNascimento40/')}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
