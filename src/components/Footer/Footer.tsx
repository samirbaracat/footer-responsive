import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h2 className="text-lg font-bold mb-4 text-white">Sobre nós</h2>
                <p className="text-gray-300">Somos uma empresa de tecnologia especializada no desenvolvimento de software e aplicativos móveis sob medida. Transformamos ideias inovadoras em soluções digitais que impulsionam o crescimento dos nossos clientes.</p>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4 text-white">Links</h2>
                <ul>
                    <li><a href="" className="hover:underline text-gray-300">Home</a></li>
                    <li><a href="" className="hover:underline text-gray-300">Serviços</a></li>
                    <li><a href="" className="hover:underline text-gray-300">Contato</a></li>
                    <li><a href="" className="hover:underline text-gray-300">Sobre</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold mb-4 text-white">Siga-nos</h2>
                <ul className="flex space-x-4">
                    <li> 
                        <FaFacebookF className="text-blue-500" /> {" "} 
                        <a href="" className="hover:underline text-gray-300">Facebook</a>
                    </li>
                    <li> 
                        <FaTwitter className="text-sky-500" /> {" "} 
                        <a href="" className="hover:underline text-gray-300">Twitter</a>
                    </li>
                    <li> 
                        <FaInstagram className="text-orange-500" /> {" "} 
                        <a href="" className="hover:underline text-gray-300">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6">
            <p>@ 2024. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer