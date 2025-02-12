import { Button } from "@/components/ui/button"
import { UserCircleIcon } from "lucide-react";


export const AuthButton = () => {
    // Add diff auth states
    return (
      <Button variant="outline" className=" px-3 py-2 text-sm font-medium  text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none [&_svg]:size-5">
        <UserCircleIcon/>
        <span className="ml-2">Sign In</span>
      </Button>
    );
}