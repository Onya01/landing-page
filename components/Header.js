import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
 return (
  <div className='header'>
   <div className='head'>
    <p className='fone'> <FontAwesomeIcon icon={faPhone} style={{width: '15px', color: '#fff'}} className={styles.phone}/> 1-855-22-AGENT</p>
    <FontAwesomeIcon icon={faEnvelope} style={{width: '15px', color: '#fff'}} className={styles.enve}/><a className='email' href="info@enrolledagent.com">  info@enrolledagent.com</a>
    
   </div>
   
   <div className={styles.link}>
   <a className={styles.sign} href="signIn">SignIn</a>
   <a className={styles.login} href="logIn" >LogIn</a>
   </div>
  </div>
 );
}
 
export default Header;