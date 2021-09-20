import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronright } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css'


const Rated = () => {
 return (
  <>
  <div className='rates'>
   <div className='rate'>
   <h1 className='rate1'>Top Rated enrolled</h1>
   <h6 className='rate2'>Licensed and Verified Enrolled Agents</h6>
   </div>

   <div className='pattern'>
    <div className='pic1'>
     <Image src='/laugh 1.png' width={70} height={70} alt='laugh' className='pict' />
     <h1 className='andrew'>Andrew Smith</h1>
     <p className='park'>PINELLAS PARK, Florida</p>
     <div className='star'>
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      </div>
     <a className='view' href='profile'>View Profile</a>
    </div>

    <div className='pic2'>
     <Image src='/smile 1.png' width={70} height={70} alt='laugh' className='pict' />
     <h1 className='andrew'>Andrew Smith</h1>
     <p className='park'>PINELLAS PARK, Florida</p>
     <div className='star'>
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      </div>
     <a className='view' href='profile'>View Profile</a>
    </div>

    <div className='pic3'>
     <Image src='/laugh 1.png' width={70} height={70} alt='laugh' className='pict' />
     <h1 className='andrew'>Andrew Smith</h1>
     <p className='park'>PINELLAS PARK, Florida</p>
     <div className='star'>
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      </div>
     <a className='view' href='profile'>View Profile</a>
    </div>
   </div>

   <div className='pic4'>
     <Image src='/laugh 1.png' width={70} height={70} alt='laugh' className='pict' />
     <h1 className='andrew'>Andrew Smith</h1>
     <p className='park'>PINELLAS PARK, Florida</p>
     <div className='star'>
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      </div>
     <a className='view' href='profile'>View Profile</a>
    </div>

    <div className='pic5'>
     <Image src='/laugh 1.png' width={70} height={70} alt='laugh' className='pict' />
     <h1 className='andrew'>Andrew Smith</h1>
     <p className='park'>PINELLAS PARK, Florida</p>
     <div className='star'>
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      </div>
     <a className='view' href='profile'>View Profile</a>
    </div>

    <div className='pic6'>
     <Image src='/laugh 1.png' width={70} height={70} alt='laugh' className='pict' />
     <h1 className='andrew'>Andrew Smith</h1>
     <p className='park'>PINELLAS PARK, Florida</p>
     <div className='star'>
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      <FontAwesomeIcon className="atm1" icon={faStar} />
      </div>
     <a className='view' href='profile'>View Profile</a>
    </div>
    <div className={styles.search}>
    <a className={styles.set} href="Find More local EAs">Find More local EAs <FontAwesomeIcon icon={faChevronright} /></a>
    </div>
  </div>
    </>

 );
}
 
export default Rated;