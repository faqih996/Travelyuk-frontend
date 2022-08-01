import Image from "next/image"

import searchIcon from "public/assets/icons/search-icon.svg"

const Search = () => {
    return (
        <form className="flex items-center ml-8" action="">
            <input 
                type="text"
                placeholder="Kategori | Lokasi"
                className="border border-gray-500 px-4 py-3 rounded-l-md text-sm text-gray-500"
            />
            
            <button className="flex justify-center items-center bg-primary-blue boder border-blue-500
                text-white text-sm 
                rounded-r-md h-[46px] w-[46px]"
                type="submit"
            >
                <Image 
                    src={searchIcon}
                    height = "24"
                    width  = "24"
                />
            </button>
        </form>
    )
}

export default Search