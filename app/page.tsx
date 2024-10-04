import Link from 'next/link';
import Navbar from './Compounds/Navbar';
export default function Coun(){
    return(
        <div>
            <Navbar></Navbar>
            <h1>Countrys</h1>
            <Link href={"/Countrys/Afganistan"}>Afghanistan</Link>&nbsp;|&nbsp;
            <Link href={"/Countrys/India"}>India</Link>&nbsp;|&nbsp;
            <Link href={"/Countrys/Iran"}>Iran</Link>&nbsp;|&nbsp;
            <Link href={"/Countrys/Pakistan"}>Pakistan</Link>&nbsp;|&nbsp;
            <Link href={"/Countrys/Russia"}>Russia</Link>&nbsp;|&nbsp;
        </div>
    )
}