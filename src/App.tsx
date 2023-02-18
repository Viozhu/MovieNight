import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UseCharacters from './pages/useGet'
import UsePageCharacters from './pages/usePageCharacters'


function App() {
  const [count, setCount] = useState(0)
  const { status, data } = UseCharacters({})
  const {status:statusPage,data:datapage } = UsePageCharacters({variables:{page:count + 1}})
  
  console.log(status, data, 'data')
  console.log(statusPage, datapage, 'datapage')
  return (
    <div className="App">

    <h1 className="text-3xl text-red-400 font-bold underline">
      Hello world!
    </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      {statusPage === 'loading' && <div>loading</div>}
      {statusPage === 'error' && <div>error</div>}
      {statusPage === 'success' && (
        <div>
          {datapage?.characters?.results?.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <img src={item.image} alt='image' />
              
            </div>)
          )}
        </div>
      )}
    </div>
  )
}

export default App
