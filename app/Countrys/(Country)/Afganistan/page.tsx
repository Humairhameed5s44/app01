import Navbar from "@/app/Compounds/Navbar";

export default function Afganistan(){
   const name="Afganistan"
    const population=42935263
    const capital="kabul"
    return(
       <div className="main">
         <Navbar></Navbar>
         <h6>Name={name}</h6>
         <h6>Population={population}</h6>
         <h6>Capital={capital}</h6>
       </div>
    )
}