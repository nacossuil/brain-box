import React from 'react'

const AppContainer = () => {
  return (
    <main className ="main">
      <div>
        <h1>BrainBox Quiz</h1>
        <p>Ready to test your knowledge? Let's begin</p>
        </div>
        <div className='metrics'>
            <div>
                <div>
                  <img src="" alt="" />
                  <span>Time</span>
                </div>
                <p>00:00</p>
            </div>
            <div>
              <div>
                  <img src="" alt="" />
                  <span>Score</span>
                </div>
                <p>0</p>
            </div>
            <div>
              <div>
                  <img src="" alt="" />
                  <span>Progress</span>
                </div>
                <p>0/10</p>
            </div>
        </div>
        <div className='progress-bar'>

        </div>
        <button>Start Quiz</button>    
   </main> 
)
}
export default AppContainer;
