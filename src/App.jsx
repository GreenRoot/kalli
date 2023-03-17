import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    console.log(cash)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    return (
    <div className="App">
      <div>
          <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
          <span style={{display: 'inline-block', margin: '0 10px'}}>{cash}</span>
          <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
      </div>
    </div>
  );
}

export default App;
