import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import UseRefExample3 from './components/UseRefExample3'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'

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
      <p>********************************</p>
      <UseCallbackExample />
    </div>
  )
}

export default App
