import Image from "next/image"

import Button from "components/Button"

// Card lokasi wisata
const PromoCard = () => {
    return(
        <article className="bg-white shadow-lg rounded-xl overflow-hidden w-[500px] h-[312px] flex">
            {/* For Location Image */}
            <figure className="relative w-[212px] h-full]">
                <Image
                    src="/assets/home/borobudur.png"
                    alt="Borobudur"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </figure>

            {/* informasi lokasi, tanggal keberangkatan, biaya, dsb */}
            <div className="flex-1 flex flex-col justify-center p-4">
                <p className="text-heading-4 text-gray-100 font-label font-bold">
                    Borobudur, Yogyakarta
                </p>
                <p className="text-heading-4 text-gray-70 mb-4">
                    Indonesia
                </p>

                {/* Harga */}
                <div className="flex gap-1">
                    <p className="text-heading-5 text-gray-70 line-through">
                        Rp. 7.700.000
                    </p>
                    <p className="text-heading-5 text-red-100 font-bold">
                        10% Off
                    </p>
                </div>

                <p className="text-[16px] font-bold text-gray-100 mb-4">
                    Rp. 6.930.000
                </p>

                <p className="text-heading-5 text-gray-70 mb-4">
                    Untuk 2 Orang, Tiket Pesawat, Penginapan 5 malam, Tour Guide, Mak...
                </p>

                <p className="text-heading-5 text-gray-50 mb-4">
                    Berangkat: 27-12-2022 10:00
                </p>

                {/* Tombol Detail & Pesan */}
                <div className="flex justify-between gap-3">
                    <Button fullWidth outlined>
                        Lihat Detail
                    </Button>
                    <Button fullWidth>
                        Pesan
                    </Button>
                </div>
                
            </div>
        </article>
    )
}

export default PromoCard