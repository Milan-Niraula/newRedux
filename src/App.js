import './App.css';
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/Index';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container my-3">
        <h1>React Material UI learning.</h1>
        <h3 style={{ color: 'blue' }}>Increment/Decrement Counter</h3>
        <div className="container my-3">
          <Button variant="contained" color='primary' onClick={() => dispatch(decNumber())}>
            <span>-</span>
          </Button>
          <input type='text' style={{ textAlign: 'center', width: '50px' }} value={myState}></input>
          <Button variant="contained" color='primary' onClick={() => dispatch(incNumber())}>
            <span>+</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
