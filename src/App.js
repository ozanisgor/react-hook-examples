import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import UseRefExample3 from './components/UseRefExample3'
import UseMemoExample from './components/UseMemoExample'

function App() {
  return (
    <div className="container mt-5">
      <UseRefExample1 />
      <p>********************************</p>
      <UseRefExample2 />
      <p>********************************</p>
      <UseRefExample3 />
      <p>********************************</p>
      <UseMemoExample />
    </div>
  )
}

export default App
