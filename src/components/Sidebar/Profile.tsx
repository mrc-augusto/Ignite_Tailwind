import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile(){
  return(
    <div className="flex items-center gap-3 ">
      <img src="https://www.github.com/mrc-augusto.png" className="h-10 w-10 rounded-full" alt="" />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Maurício Augusto</span>
        <span className="truncate text-sm text-zinc-500">mrc_augusto@hotmail.com</span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500"/>
      </Button>
    </div>
  )
}