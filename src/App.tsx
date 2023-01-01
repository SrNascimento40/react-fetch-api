import { useFetch } from './hooks/useFetch';

type Repository = {
  full_name: string;
  description: string
}

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>('https://api.github.com/users/srnascimento40/repos')

  return (
    <div className="App">
      <h1>basic form of fetching</h1>
      <ul>
        {isFetching && <p>Carregando...</p>}
        {repositories?.map(repo => {
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
