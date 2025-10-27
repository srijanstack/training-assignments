import { Link } from "react-router-dom";


function NotFound(){
    return(<>
    <div className="h-[700px] lg:h-[650px] w-full flex  flex-col gap-5 items-center justify-center bg-backgrey flex-grow">
        <img className="w-[800px]" src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png" alt="404error" />
        <Link to='/'><button className="h-10 w-50 border border-black rounded-3xl text-white bg-[#002d52]">Go Home</button></Link>
    </div>
    
    </>)
}
export default NotFound;