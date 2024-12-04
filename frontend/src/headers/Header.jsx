import Leftside from "./Leftside"
import Rightside from "./Rightside"

const Header = () => {
  return (
    <div className="mx-3 flex items-center justify-between py-4">
        <Leftside/>
        <Rightside/>
    </div>
  )
}

export default Header