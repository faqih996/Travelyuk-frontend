import Image from "next/image"

import Rating from "./Rating"

const TestimonialCard = () => {
    return(
        <article className="flex flex-col bg-white rounded-xl shadow-md w-[288px] h-[281px] p-4">
            <div className="flex mb-4">
                <figure className="relative rounded-full overflow-hidden w-16 h-16 mr-3">
                    <Image 
                        src="/assets/home/profile.png"
                        alt="Profile"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </figure>

                <div className="flex flex-col">
                    <p className="text-heading-4 text-gray-100 font-label font-bold mb-1">
                        Syakir Firdaus
                    </p>
                    <p className="text-heading-5 text-gray-50 font-bold" >
                        Bandung, Jawa Barat
                    </p>
                </div>
            </div>


            <Rating />

            <p className="text-heading-5 text-gray-70 my-4">
                Nyari makanan halal gampang dan mudah banget udah ada tour guide nya siap membantu , terimakasih ya tour guide nya
                penginapannya oke
            </p>

            <p className="text-heading-5 text-gray-100 font-bold">
                Nusa Penida, Bali
            </p>

            <p className="text-heading-6 text-gray-50">
                18-05-2022
            </p>
            
        </article>
    )
}

export default TestimonialCard
