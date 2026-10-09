import Link from 'next/link'

type Props = {
    title: string
    content: Content[] | string[]
  }
  
  type Content = {
    label: string
    href: string
  }
  

const FooterInfo = ({ title, content }: Props) => {
    return (
        <div className="flex flex-col">
            <h2 className="mb-4 font-bold text-gray-100 font-label text-heading-3">
                {title}
            </h2>
            {content.map((item:Content | string, index: number) => {
                if (typeof item !== 'string') {
                    return (
                        <Link href={item.href} key={index}>
                            <a href="" className="mb-3 text-heading-4 text-gray-50">
                                {item.label}
                            </a>
                        </Link>
                    )
                }

                return(
                    <p className="mb-3 text-gray-50 text-heading-4" key={index}>
                        {item}
                    </p>
                )

            })}
        </div>
    )
}

export default FooterInfo