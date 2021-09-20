// import { Component } from "react";
// import Image from "next/image";
// import StarRatings from 'react-star-ratings';

// class Rate extends Component {

// state = {
//   rating: null
//  }
//  changeRating =( newRating, name )=> {
//   this.setState({
//    rating: newRating
//   });
//  }

//  render() {
//   return(
//   <div className='rates'>
//    <div className='rate'>
//    <h1 className='rate1'>Top Rated enrolled</h1>
//    <h6 className='rate2'>Licensed and Verified Enrolled Agents</h6>
//    </div>
//    <div className='pattern'>
//     <div className='pic1'>
//      <Image src='/laugh 1.png' width={70} height={70} alt='laugh' className='pict' />
//      <h1 className='andrew'>Andrew Smith</h1>
//      <p className='park'>PINELLAS PARK, Florida</p>
//      <StarRatings 
//      rating={this.state.rating}
//      starRatedColor="yellow"
//      changeRating={this.changeRating}
//      numberOfStars={5}
//      name='rating'
//      rating={2.403} />
//      <br/>
//      <a className='view' href='profile'>View Profile</a>
//     </div>

//     <div className='pic2'>
//      <Image src='/smile 1.png' width={70} height={70} alt='laugh' className='pict' />
//      <h1 className='andrew'>Andrew Smith</h1>
//      <p className='park'>PINELLAS PARK, Florida</p>
//      <a className='view' href='profile'>View Profile</a>
//     </div>

//     <div className='pic3'>
//      <Image src='/laugh 1.png' width={70} height={70} alt='laugh' className='pict' />
//      <h1 className='andrew'>Andrew Smith</h1>
//      <p className='park'>PINELLAS PARK, Florida</p>
//      <a className='view' href='profile'>View Profile</a>
//     </div>
//    </div>
//   </div>
//   )
//  }
// }
// export default Rate;