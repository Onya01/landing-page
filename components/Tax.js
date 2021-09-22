import Image from 'next/image';
import styles from '../styles/Home.module.css'


const Tax = () => {
 return(
  <div className={styles.taxe}>
   <h1 className={styles.tax}>Tax Resources</h1>
   <div className='background1'>
    <div className={styles.icon}>
    <Image src='/icon.png' alt='icon' width={50} height={30}/>
    </div>
   </div >
   <div className={styles.down}>
   <div className='background2'>
    <Image src='/icon.png' alt='icon' width={50} height={30}/>
   </div>
   <div className='background3'>
    <Image src='/icon.png' alt='icon' width={50} height={30}/>
   </div>
   <div className='background4'>
    <Image src='/icon.png' alt='icon' width={50} height={30}/>
   </div>
   <div className='background5'>
    <Image src='/icon.png' alt='icon' width={50} height={30}/>
   </div>
   </div>
  </div>
 );
}
export default Tax;