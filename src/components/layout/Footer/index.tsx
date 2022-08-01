import Image from "next/image";

import Container from "components/Container";
import FooterInfo from "./FooterInfo";

import styles from "./footer.module.css";

import travelologo from "public/assets/travelo-logo-footer.png";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image
                            src={travelologo}
                            alt="Travelo-logo"
                            placeholder="blur"
                            height="98"
                            width="136"
                        />
                    </figure>  

                    <div className="flex flex-1 justify-between ml-[106px]">
                        <FooterInfo
                            title="Info"
                            content={[
                                {
                                    label: "Tentang Kami",
                                    href: "/"
                                },
                                {
                                    label: "Testimonial",
                                    href: "/"
                                },
                                {
                                    label: "Kontak",
                                    href: "/"
                                }
                            ]}
                        />

                        <FooterInfo
                            title="Perusahaan"
                            content={[
                                {
                                    label: "Syarat & Ketentuan",
                                    href: "/"
                                },
                                {
                                    label: "Kebijakan Privasi",
                                    href: "/"
                                },
                                {
                                    label: "Blog",
                                    href: "/"
                                },
                                {
                                    label: "Bantuan Layanan",
                                    href: "/"
                                }
                            ]}
                        />

                        <FooterInfo
                            title="Kontak"
                            content={[
                                'Jl. Pondok Aren No.41',
                                'Tangerang Selatan, Banten',
                                'Indonesia',
                                '089608347125',
                                'travelyuk@gmail.com',
                            ]}
                        />

                        

                        
                    </div>          
                </div>
            </Container>


            <div className="bg-blue-100 p-3">
                <p className="text-heading-5 text-white font-bold text-center">
                    Copyright 2022 Travelyuk. All Right Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer