import React from 'react'
import { ScoreBoard } from './ScoreBoard';

const AppContainer = () => {
  return (
    <main className ="main">
      <div>
        <h1>BrainBox Quiz</h1>
        <p>Ready to test your knowledge? Let's begin</p>
        </div>
        <div className='metrics'>
          <ScoreBoard />
        </div>
        <div className='progress-bar'>

        </div>
        <button>Start Quiz</button>    
   </main> 
)
}
export default AppContainer;
