import Image from "next/image"

import travelologo from 'public/assets/travelo-logo-header.png'

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <div className="flex justify-between items-center">
                <Image
                    src={travelologo}
                    alt="Travelo-logo"
                    placeholder="blur"
                    height="48"
                    width="182"
                />
            </div>
        </header>
    )
}

export default Header