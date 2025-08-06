import SidebarItem from "./Sidebaritems"
import items from "../components/data/slidebar.json"


export default function Sidebar(){
    return(
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item}/>)}
        </div>
    )
}