import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Logo = () => {
 return (
  
  <div className={styles.logos}>
   <div className={styles.img}>
    <Image src='/sharpLogo 1.png' alt='logo' width={140} height={25} />
   </div>
   <div className='views'>
    <a className={styles.Agent} href="Agent">Find an Erolled Agent</a>
    <a className={styles.Ea} href="ea">Ask an EA</a>
    <a className={styles.News} href="news">News & Articles</a>
    <a className={styles.Res} href="resources">Resources</a>
   </div>
  </div>

 );
}
 
export default Logo;