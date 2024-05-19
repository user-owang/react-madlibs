import { useState } from 'react'
import MadlibForm from './MadlibForm'
import MadlibStory from './MadlibStory'

const Madlib = () => {
  const [words,setWords] = useState(0)
  const [formSubmit, setFormSubmit] = useState(false)
  function submitter(word){
    setWords(word)
    setFormSubmit(submit => !submit)
  }
  return(
    <>
    <MadlibForm onSubmit={submitter} submitted={formSubmit}/>
    <MadlibStory words={words} onReset={submitter}/>
    </>
  )
}

export default Madlib