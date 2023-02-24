import { FaAngleDown, FaCaretDown } from "react-icons/fa";
import Filter from "./accordion/Filter";
import Sort from "./accordion/Sort";
import Watch from "./accordion/Watch";

function Accordion() {
    return (
        <div className="md:min-w-[260px] md:w-[260px] w-full">            
                <Sort/>
                <Filter/>
                <Watch/>
        </div>
    );
}

export default Accordion;