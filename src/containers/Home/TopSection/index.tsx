import Container from "components/Container"
import Button from 'components/Button'

import styles from './TopSection.module.css'

const TopSection = () => {
    return(
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col pt-[112px] pb-[58px]">
                    <div className="flex flex-col mb-[174px]">

                        <h1 className="text-heading-2 font-bold font-label text-gray-900 w-[500px] mb-8">
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>

                        <h1 className="text-heading-2 text-primary-blue font-bold font-label mb-8">
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>
                        
                        <h1 className="text-heading-2 text-blue-100 font-bold font-label mb-8">
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>

                        <h1 className="text-heading-2 text-yellow-70 font-bold font-label mb-8">
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>
                        
                        <h1 className="text-heading-2 text-red-70 font-bold font-label mb-8">
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>

                        <p className="text-heading-3 text-gray-900 w-[526px] mb-7">
                            Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di Travel kamu akan dapat pelayanan terbaik untuk wisata liburanmu kemana saja dan kapan saja
                        </p>

                        <Button>
                            Lihat Paket
                        </Button>

                    </div>
                </div>
            </Container>

        </section>
    )
}

export default TopSection;