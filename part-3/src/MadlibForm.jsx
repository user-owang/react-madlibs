import { useState, useEffect } from 'react'

const MadlibForm = ({onSubmit, submitted}) => {
  const [formData, setFormData] = useState({noun1: "", noun2: "", adjective: "", color: ""})
  useEffect(() => setFormData({noun1: "", noun2: "", adjective: "", color: ""}),[submitted])
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }
  function submitHandler(e){
    e.preventDefault()
    onSubmit(formData)
  }
  return(
    <>
      <form onSubmit={submitHandler}>
      <input
        id="noun1"
        name="noun1"
        type="text"
        placeholder="noun 1"
        value={formData.noun1}
        onChange={handleChange}
      />
      <input
        id="noun2"
        name="noun2"
        type="text"
        placeholder="noun 2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <input
        id="adjective"
        name="adjective"
        type="text"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />
      <input
        id="color"
        name="color"
        type="text"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button disabled={submitted}>Get Story</button>
      </form>
    </>
  )
}

export default MadlibForm