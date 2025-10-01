import { NavLink } from "react-router";
import footerData from "../../Api/FooterApi/footer.json";
import * as FaIcons from "react-icons/fa"; // import all FontAwesome icons

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-16 py-6">
            <div className="container px-4">
                <div className="row">
                    <div className="siteLogo">
                        <NavLink to="/" className="text-white font-bold text-2xl">
                            WorldLands
                        </NavLink>
                    </div>
                </div>

                <div className="mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {footerData.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-white mb-4">{section.title}</h3>
                            <ul>
                                {section.links.map((link, idx) => {
                                    const Icon = FaIcons[link.icon]; // dynamically get icon
                                    return (
                                        <li key={idx} className="mb-2 flex items-center gap-2">
                                            {Icon && <Icon className="text-gray-400" />}
                                            <a href={link.url} className="hover:text-gray-400 text-white">
                                                {link.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
               <div className="text-center mt-8 pt-4 border-t border-gray-700 text-gray-400">
                    &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
                    </div>
            </div>
        </footer>
    )
}

export default Footer;