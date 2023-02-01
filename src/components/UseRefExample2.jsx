import { useEffect, useState, useRef } from 'react'

function useRefExample2() {
  const [name, setName] = useState('')
  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <h2>Example 2</h2>
      <h4>Renders: {renders.current}</h4>
      <h5>Prev Name State: {prevName.current}</h5>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        className="form-control mb-3"
      />
    </div>
  )
}
export default useRefExample2
