import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, multiply } from './component/store/reducer/counterReducer'
import { toggleAuth } from './component/store/reducer/isAuthReducer'


function App() {
  // const isLogged = useSelector(state => state.isLogged)
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(increment())
  }
  const decrementHandler = () => {
    dispatch(decrement())
  }

  const multiplyHandler = () => {
    dispatch(multiply({ amount: 5 }))
  }

  const toggleAuthHandler = () => {
    dispatch(toggleAuth())
  }

  return (
    <div className=' min-h-screen flex justify-center items-center'>
      <div className='space-y-10'>
        {counter}
        <div className='flex justify-center items-center p-10 text-sm space-x-3'>
          <button onClick={incrementHandler}>Add</button>
          <button onClick={multiplyHandler}>Add by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
          <button onClick={toggleAuthHandler}>Toggle</button>
        </div>
      </div>
    </div>
  )
}

export default App