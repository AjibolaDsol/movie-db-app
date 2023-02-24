import { FaAngleDown } from "react-icons/fa";


function Sort() {
    return (
        <div className="min-w-[260px] w-full border-[1px] rounded-lg shadow-md">
                <div className="py-[14px] px-4 flex justify-between items-center border-b-[1px]">
                    <h2 className="font-semibold text-[17px]">Sort</h2>
                    <FaAngleDown/>
                </div>

                <div className="w-full pt-[14px] pb-4 px-4">
                    <h3 className="mb-3 font-light text-base">Sort Results By</h3>

                    <div className="w-full">
                        <span>
                            <select className="border-none outline-none h-9 py-2 px-3 text-sm text-[#212529] bg-[#e4e7eb] appearance-none w-full rounded-md">
                                <option value="popularity.desc">Popularity Descending</option>
                                <option value="popularity.asc">Popularity Ascending</option>
                                <option value="vote_average.desc">Rating Descending</option>
                                <option value="vote_average.asc">Rating Ascending</option>
                                <option value="primary_release_date.desc">Release Date Descending</option>
                                <option value="primary_release_date.asc">Release Date Ascending</option>
                                <option value="title.asc">Title (A-Z)</option>
                                <option value="title.desc">Title (Z-A)</option>
                            </select>
                                          
                            
                        </span>
                </div>
                </div>

            </div>
    );
}

export default Sort;