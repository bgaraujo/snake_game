import React, {useState, useEffect} from 'react'
import './App.css'


const App = () => {
  const [size] = useState(10)
  const [node,setNode] = useState()
  const [nextMove,setNextMove] = useState(0)
  const [time,setTime] = useState()
  const [snakeSize, setSnakeSize] = useState([[1,1],[1,2],[1,3]])
  const [game,setGame] = useState(true)

  const move = (move) => {
    let snake = [...snakeSize]
    let localPlace = [...snakeSize[(snake.length-1)]]
    switch (move) {
      case 'ArrowLeft':
          localPlace[0] -= 1
        break
      case 'ArrowRight':
          localPlace[0] += 1
        break
      case 'ArrowUp':
          localPlace[1] -= 1
        break
      case 'ArrowDown':
          localPlace[1] += 1
        break
      default:
        break
    }
    if(
      localPlace[0] < 0 ||
      localPlace[0] > (size-1) ||
      localPlace[1] < 0 ||
      localPlace[1] > (size-1)
    )
      setGame(false)
      if( JSON.stringify(snake[(snake.length-1)]) !== JSON.stringify(localPlace) ){
        snake.push(localPlace)
        if( JSON.stringify(localPlace) !== JSON.stringify(node) )
          snake.splice(0,1)
        else
          setNode(null)
        setSnakeSize(snake)
      }
  }

  useEffect(() => {
    if(!node)newNode()

    move(nextMove)

    const interval = setInterval(() => { if(game)setTime(Date.now())}, 500);
    return () => {
      clearInterval(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[time])


  document.body.addEventListener('keydown', function(event) {
    setNextMove(event.code)
  })

  const coluns = (line) => {
    const coluns = Array.from(Array(size).keys()).map((column) => {
      let className = "block"
      if( JSON.stringify(node)  === JSON.stringify([column,line]))
        className += " active"
      if(snakeSize.find((element) => JSON.stringify(element) === JSON.stringify([column,line]) ))
        className += ' snake'
      return <div className={className} key={column}/>
    })
    return coluns
  }

  const newNode = () => {
    const x = parseInt(Math.random() * (size - 0) + 0)
    const y = parseInt(Math.random() * (size - 0) + 0)
    setNode([x,y])
  }

  const lines = () => {
    const lines = Array.from(Array(size).keys()).map((line) => {
      return coluns(line)
    })
    return lines
  }

  const Board = () => {
    return lines()
  }

  return (
    <div className="App">
      <div className="game">
        {game?
          <Board />:
          <div>Game over</div>
        }
      </div>
    </div>
  )
}

export default App
