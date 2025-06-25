import './App.css'
import { dicrement, increment } from './redux/features/counter/counterSlice';
import type { RootState } from './redux/store';
import { useAppDispatch, useAppSelector } from './redux/hook';

export default function App() {

  const disPatch = useAppDispatch();
  const {count} = useAppSelector((state: RootState)=> state.counter)
  

  const handleIncrement = (amount: number)=>{
    disPatch(increment(amount))
  }

  const handleDicrement = ()=>{
    disPatch(dicrement())
  }

  return (
    <>
      <div className=' box'>
        <h2>Redux Counter Projects</h2>
        <button onClick={handleDicrement} className="btn-2">Dicrements</button> 
        <p className=' jero'>{count}</p>
        <button onClick={()=> handleIncrement(1)} className='btn'>Increments</button>
      </div>
    </>
  )
}
