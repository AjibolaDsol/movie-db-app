import { FaAngleDown } from "react-icons/fa";

function Filter() {
    return (
        <div className="w-full md:min-w-[260px] border-[1px] rounded-lg shadow-md mt-3">
                <div className="py-[14px] px-4 flex justify-between items-center border-b-[1px]">
                    <h2 className="font-semibold text-[17px]">Filter</h2>
                    <FaAngleDown/>
                </div>

                <div className="w-full pt-[14px] pb-4 px-4">
                    <h3 className="mb-3 font-light text-base">Show Me</h3>
                </div>
            </div>
    );
}

export default Filter;