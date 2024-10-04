import Navbar from '../../../Compounds/Navbar';
export default function Iran(){
    const name="Iran"
    const population=91567738
    const capital="Tehran"
    return(
       <div className="main">
         <Navbar></Navbar>
         <h6>Name={name}</h6>
         <h6>Population={population}</h6>
         <h6>Capital={capital}</h6>
       </div>
    )
}