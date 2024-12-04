import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

function Leftside() {
  return (
    <div className="flex gap-3 items-center">
      <div className="hidden item-center lg:flex">
        <Button variant="goast" className="rounded-full p-2">
           <Menu className="size-6"/>
        </Button>
        <img
          src="https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_4.ico"
          width={40}
          height={40}
          alt="icon"
        />
      </div>
    </div>
  )
}


export default Leftside