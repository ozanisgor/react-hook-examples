import { useState, useEffect, useRef } from 'react'

function Todo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  const isMounted = useRef(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data)
            setLoading(false)
          }
        }, 3000)
      })

    // Runs when component unmounted
    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return loading ? <h3>Loading...</h3> : <h4>{todo.title}</h4>
}
export default Todo
