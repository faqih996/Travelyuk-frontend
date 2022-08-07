import Container from "components/Container"
import Button from 'components/Button'
import InfoItem from "./InfoItem"

import styles from './TopSection.module.css'

const TopSection = () => {
    return(
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col pt-[112px] pb-[58px]">
                    {/* Top Hero Section */}
                    <div className="flex flex-col mb-[174px]">

                        <h1 className="text-heading-2 font-bold font-label text-gray-100 w-[500px] mb-8">
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>

                        <p className="text-heading-3 text-gray-70 w-[526px] mb-7">
                            Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di Travel kamu akan dapat pelayanan terbaik untuk wisata liburanmu kemana saja dan kapan saja
                        </p>

                        <Button>
                            Lihat Paket
                        </Button>

                    </div>
                    {/* end Top Hero Section */}

                    {/* info item section*/}
                    <div className="flex gap-40 mx-auto">
                        <InfoItem
                            label="+30"
                            subLabel="Negara"
                        />
                        <InfoItem
                            label="+1500"
                            subLabel="Penginapan"
                        />
                        <InfoItem
                            label="+100"
                            subLabel="Wisata"
                        />
                        <InfoItem
                            label="+50.000"
                            subLabel="Pelanggan"
                        />
                            

                    </div>
                    {/* end info item section */}


                </div>
            </Container>
        </section>
    )
}

export default TopSection