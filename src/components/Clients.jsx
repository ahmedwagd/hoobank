import React from 'react'
import styles from '../style';
import { clients } from '../constants'



function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(client => (
          <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} key={client.id}>
            <img src={client.logo} alt={client.id} className={`sm:w-[192px] w-[100%] h-[100%] object-contain`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients