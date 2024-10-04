import Navbar from '../../../Compounds/Navbar';
export default function Russia(){
    const name="Russia"
    const population=144820423
    const capital="Moscow"
    return(
       <div className="main">
         <Navbar></Navbar>
         <h6>Name={name}</h6>
         <h6>Population={population}</h6>
         <h6>Capital={capital}</h6>
       </div>
    )
}