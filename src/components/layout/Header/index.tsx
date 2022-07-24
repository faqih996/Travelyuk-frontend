import Image from "next/image"

import Container from "components/Container"
import Button from "components/Button"
import Search from "./Search"
import Nav from "./Nav"

import travelologo from 'public/assets/travelo-logo-header.png'

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <Image
                            src={travelologo}
                            alt="Travelo-logo"
                            placeholder="blur"
                            height="48"
                            width="182"
                        />

                        <Search />
                    </div>

                    <div className="flex">
                        <Nav />
                        <Button>
                            Masuk
                        </Button>
                    </div>

                </div>
            </Container>
        </header>
    )
}

export default Header