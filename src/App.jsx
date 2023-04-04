import './App.css'
import ShapeContainer from './Shapes/ShapeContainer'
import ShapeHOC from './Shapes/ShapeHOC'
import Fail from "./assets/fail.png"
import Success from "./assets/success.png"
import { useState } from 'react'
import ModalWrapper from './ModalWrapper'
const shapes = ["arch", "circle", "square", "semi-circle", "triangle", "rectangle"]

function App() {

	const [winning, setWinning] = useState(false)
	const [failing, setFailing] = useState(false)
	let randomShape = shapes[
		Math.floor(Math.random() * 6)
	]

	const handleShapeClick = (shape) => {
		if (shape !== 'square') {
			setFailing(true)
			setTimeout(() => { setFailing(false) }, 1500);
		} else
			if (
				shape === 'square' && (randomShape !== 'square' && randomShape !== 'rectangle')
			) {
				setFailing(true)
				setTimeout(() => { setFailing(false) }, 1500);
			} else {
				setWinning(true)
				setTimeout(() => { setWinning(false) }, 1500);
			}
	};

	return (
		<div className="App">
			<div id="quiz-box">
				<div id="question-box">
					{
						<ShapeHOC shape={
							randomShape
						}
							inset={false}
						/>
					}
				</div>
				<ShapeContainer>
					{
						shapes.map(x => {
							return <ShapeHOC shape={x} handleClick={handleShapeClick} />
						})
					}
				</ShapeContainer>
				{failing && (
					<ModalWrapper>
						<img alt="women looking sad" className='fail-succeed' src={Fail}
						/>
						<h1>It goes in the square hole, did you get it right?</h1>
					</ModalWrapper>
				)
				}
				{winning && (
					<ModalWrapper>
						<img alt="woman celebrating" className='fail-succeed' src={Success}/>
						<h1>That's right, it goes in the square hole!</h1>
					</ModalWrapper>
				)}
			</div>
		</div>
	)
}

export default App
