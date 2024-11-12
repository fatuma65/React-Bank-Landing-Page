import styles from '../styles'
import { clients } from '../constants'

const Clients = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => (
                <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
                    <img src={client.logo} alt='client-logo' className='sm:min-w-[192px] w-[100px] object-contain hover:text-[white]'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Clients