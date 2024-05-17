import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';




function Card(props) {

  function clickcard() {
    console.log(props.name)
    sessionStorage.setItem("name", props.name);
  }
  
  return (

    <div className="max-w-[385px] card m-5">
      <Link to='/workout'><img src={props.imgURL} alt='workout' onClick={clickcard}></img></Link>
      <div className='border-b border-white pb-2 px-3'>
        <h1 className='text-2xl'>{props.name}</h1>
        <div className='flex justify-between items-center'> <p className='text-md text-[rgba(204,202,202,0.5)]'>{props.level} | {props.equipment} </p> <CiHeart className='text-4xl text-[#5142FF]' /></div>
      </div>
      <p className='p-3'>{props.about}</p>
      <div className='text-right m-3 mt-0 text-[#F0FF42] text-2xl'>{props.time} min</div>
    </div>
  );
}

export default Card;
