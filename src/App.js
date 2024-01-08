import { useState } from 'react'
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
  const [userInput, setUserInput] = useState({initialInvestment:10000, annualInvestment:6000, expectedReturn:15, duration:10})

  const inputIsValid = userInput.duration >=1;
     
  function handleChange (inputIdentifier, newValue){
      setUserInput((prevUserInput) => {
          return{
              ...prevUserInput,
              [inputIdentifier] : +newValue
          };
      });
  }

  return (
    <>
      <Header />
      <UserInput userInput= {userInput} onChange={handleChange}/>
      {!inputIsValid && (<p className='center'>Please enter the duration greater than zero.</p>)}
      {inputIsValid && <Result input={userInput}/>}
    </>
  );
}

export default App;
 