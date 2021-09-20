import { useState } from "react";

const Homepage = () => {
 const [code, setCode] = useState('');
 const [last, setLast] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  console.table({code, last});
 };

 return (
  <div className='background'>
   <div className='text'>
    <h1 className='text1'>Find Your Next IRS Enrolled Agent</h1>
    <p className='text2'>Browse through our directory of over 60,000 professionals and engage them for free</p>
   </div>
   <div className='form'>
    <form onSubmit={handleSubmit}>
     <input type="text" 
     className='form-control1' 
     value={code} 
     onChange={(e) => setCode(e.target.value)}
     placeholder='Zip code\city\state'
     required 
     />

     <input type="text" 
     className='form-control2' 
     value={last} 
     onChange={(e) => setLast(e.target.value)}
     placeholder='last name'
     required 
     />
     <button type='submit' className='btn'>Find</button>
    </form>
   </div>
  </div>
 );
}
 
export default Homepage;