import Navbar from '../../../Compounds/Navbar';
export default function India(){
    const name="India"
    const population=1450935791
    const capital="New Delhi"
    return(
       <div className="main">
         <Navbar></Navbar>
         <h6>Name={name}</h6>
         <h6>Population={population}</h6>
         <h6>Capital={capital}</h6>
       </div>
    )
}