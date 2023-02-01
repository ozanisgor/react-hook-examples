import { useRef } from 'react'

function UseRefExample() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = e => {
    e.preventDefault()

    inputRef.current.value = 'Hello!'
    inputRef.current.style.backgroundColor = 'lightgreen'
    paraRef.current.innerText = 'ho ho ho'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        <p
          onClick={() => inputRef.current.focus()}
          ref={paraRef}
        >
          Hello
        </p>
      </form>
    </div>
  )
}
export default UseRefExample