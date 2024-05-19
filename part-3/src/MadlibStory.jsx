import { useState } from 'react'

const MadlibStory = ({words, onReset}) => {
  function clickHandler(){
    onReset(0)
  }
  if (words){
    return(
      <>
        <p>There was a {words.color} {words.noun1} who loved a {words.adjective} {words.noun2}.</p>
        <button onClick={clickHandler}>Restart</button>
      </>
    )
  } else{
    return(
      <p></p>
    )
  }
}

export default MadlibStory