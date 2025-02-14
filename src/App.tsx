import { useState } from 'react'
import './App.css'
import WillYou from './components/willYou'
import EnterNickname from './components/enterNickname'

function App() {
  const [isNicknameCorrect, setIsNicknameCorrect] = useState(false);

  return (
    <div className="w-screen h-screen">
      {!isNicknameCorrect ? (
        <EnterNickname onCorrectNickname={() => setIsNicknameCorrect(true)} />
      ) : (
        <WillYou />
      )}
    </div>
  )
}

export default App
