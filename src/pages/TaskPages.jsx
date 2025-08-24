import { useSearchParams } from "react-router-dom";
import { ChevronRight, ChevronLeftIcon, Trash2Icon } from "lucide-react";

function TaskPages() {
  const [searchParams] = useSearchParams();
  const text = searchParams.get("text");
  const description = searchParams.get("description");
  return (
    <div  
          className="h-screen w-screen  bg-emerald-500/100 gap-10 text-white flex justify-center p-10 font-bold text-3xl">
      <button 
          className=" w-10 p- h-10  hover:bg-emerald-600/60 rounded-md mb-4 flex items-center justify-center">
          <ChevronLeftIcon/>
        </button>
        <div 
          className="w-[500px] h-[500px] bg-emerald-600/60 p-6 rounded-md mb-4 flex flex-col gap-2 items-center">
          <h1>Descriçao da tarefa</h1>
          
          <div 
            className="bg-emerald-500/100 p-4 rounded-md w-full flex flex-col gap-2 items-center">
            <p className="">{text} </p>
            <p>{description}</p>
          </div>
        </div>
    </div>
  );
}   
export default TaskPages;