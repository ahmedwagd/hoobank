import React from 'react'
import styles, { layout } from '../style';
import { card } from '../assets'
import Button from './Button';


function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] relative z-[5]' />
      </div>
    </section>
  )
}

export default CardDeal