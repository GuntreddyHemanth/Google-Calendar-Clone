import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Rightside = () => {
  return (
    <Select>
    <SelectTrigger className="w-24 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring">
      <SelectValue placeholder="Month" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="month">Month</SelectItem>
        <SelectItem value="week">Week</SelectItem>
        <SelectItem value="day">Day</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default Rightside