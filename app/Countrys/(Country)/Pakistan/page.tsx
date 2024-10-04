import Navbar from '../../../Compounds/Navbar';
export default function Pakistan(){
    const name="Pakistan"
    const population=251269164
    const capital="Islamabad"
    return(
       <div className="main">
         <Navbar></Navbar>
         <h6>Name={name}</h6>
         <h6>Population={population}</h6>
         <h6>Capital={capital}</h6>
       </div>
    )
}