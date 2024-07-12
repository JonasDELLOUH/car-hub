import Image from "next/image";
import {footerLinks} from "@/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links-container">
                <div className="footer__rights">
                    <Image src={'/logo.svg'} alt={'logo'}
                           width={118} height={18} className={'object-contain'}/>
                    <p className={'text-base text-gray-700'}>
                        Carhub 2023 <br/>
                        All rights reserved &copy;
                    </p>
                </div>

                <div className="footer__links">
                    {footerLinks.map((link, i) => (
                        <div key={link.title}
                             className={'footer__link'}
                        >
                            <h3 className="font-bold">
                                {link.title}
                            </h3>

                            {link.links.map((item, i) => (
                                <Link
                                    href={item.url}
                                    key={item.title}
                                    className={'text-gray-500'}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

            </div>

            <div className="footer__copyrights">
                <p className="">
                    @2023 CarHub. All Rights Reserved
                </p>
                <div className="footer__copyrights-link">
                    <Link
                        href={'/'}
                        className={'text-gray-500'}
                    >
                        Privacy & Policy
                    </Link>

                    <Link
                        href={'/'}
                        className={'text-gray-500'}
                    >
                        Terms & Condition
                    </Link>
                </div>
            </div>

        </footer>
    )
}
export default Footer;