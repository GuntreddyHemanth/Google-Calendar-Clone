import { Button } from "@/components/ui/button"
import dayjs from "dayjs"
import { Menu } from "lucide-react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";




function Leftside() {

  // const handleTodayClick = () => {

  // }


  return (
    <div className="flex gap-3 items-center">
      <div className="hidden item-center lg:flex gap-2">
        <Button variant="goast" className="rounded-full p-2">
           <Menu className="size-6"/>
        </Button>
        <img
          src="https://calendar.google.com/googlecalendar/images/favicons_2020q4/calendar_4.ico"
          width={40}
          height={40}
          alt="icon"
        />
        <h1 className="text-2xl">Calendar</h1>
      </div>

        <Button variant="outline">
          Today
        </Button>

      <div className="flex items-center gap-3">
        <MdKeyboardArrowLeft
           className="size-6 cursor-pointer font-bold"
        />

         <MdKeyboardArrowRight
           className="size-6 cursor-pointer font-bold"
        />
      </div>

      <h1 className="text-xl hidden sm:block">
        December 5, 2024
      </h1>
    </div>
  )
}


export default Leftside