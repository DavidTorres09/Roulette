import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: 'La 45', style: { backgroundColor: 'black' } },
  { option: 'Pizza Hut', style: { backgroundColor: '#ff2f00' } },
  { option: 'Johnny Rockets', style: { backgroundColor: '#ffc500' } },
  { option: 'Subway', style: { backgroundColor: '#0bd600' } },
  { option: 'Smashburger', style: { backgroundColor: '#cfa300' } },
  { option: 'Spoon', style: { backgroundColor: '#b27c41' } },
  { option: 'White', style: { backgroundColor: '#fff' } }
]

function RouletteSpin() {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        textColors={['#ffffff']}

        outerBorderWidth={3}
        outerBorderColor={'#d1b847'}

        radiusLineColor={'#d1b847'}
        radiusLineWidth={1}
        
        innerRadius={3}
        innerBorderWidth={3}

        fontFamily={'Kalam'}
        fontSize={24}

        spinDuration={1.0}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default RouletteSpin