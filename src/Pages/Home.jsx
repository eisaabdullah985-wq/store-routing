import { useNavigate } from "react-router-dom"
import banner from '../assets/banner.webp'

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full gap-x-2">

                <h1 className="text-2xl sm:text-3xl md:text-4xl mt-2 font-semibold text-center px-4">
                    WELCOME TO 
                    <span className="text-red-400"> THE ONLINE STORE </span>
                </h1>
                
                <div className="flex sm:flex-row justify-center items-center gap-2 sm:gap-x-6 md:gap-x-10 p-2 text-sm sm:text-base">
                    <p className="font-semibold text-amber-400">Handcrafted Goods</p>
                    <p >|</p>
                    <p className="font-semibold text-amber-400">Free Shipping</p>
                    <p>|</p>
                    <p className="font-semibold text-amber-400">Made with Love</p>
                </div>

                <div className="w-full h-auto md:h-[400px] mt-2 flex flex-col md:flex-row p-2 md:p-4">

                    <div className="md:m-10 w-full md:w-1/4 p-4 md:p-0">
                        <h1 className="font-semibold text-black text-xl md:text-2xl mb-2 text-center md:text-left">
                            Why Shop With Us?
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
                            <p className="text-cyan-500 text-sm md:text-l m-1 p-1 text-center md:text-left">
                                ⭐ 1,247+ happy customers this month
                            </p>
                            <p className="text-cyan-500 text-sm md:text-l m-1 p-1 text-center md:text-left">
                                👔 New arrivals every Friday
                            </p>
                            <p className="text-cyan-500 text-sm md:text-l m-1 p-1 text-center md:text-left">
                                🕖 7 day return policy
                            </p>
                            <p className="text-cyan-500 text-sm md:text-l m-1 p-1 text-center md:text-left">
                                📞 24/7 customer support
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-start mt-6 md:mt-4 mb-4 md:mb-0">
                            <button 
                                className="bg-black text-white rounded-lg cursor-pointer px-4 py-2 hover:bg-gray-900 text-sm md:text-base w-full sm:w-auto"
                                onClick={() => navigate('products')}
                            >
                                Shop Now ➡
                            </button>
                </div>
                    </div>

                    <div className="w-full md:w-3/4 rounded-xl overflow-hidden relative h-[300px] md:h-auto mt-4 md:mt-0">
                        <img
                            src={banner}
                            className="w-full h-full object-cover"
                            alt="Lifestyle Banner"
                        />
                        <div className="absolute inset-0 flex items-end justify-center md:justify-start p-4 md:p-6">
                            <button
                                onClick={() => navigate('products')}
                                className="bg-white text-black font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg shadow-md hover:bg-gray-200 transition text-sm md:text-base"
                            >
                                Explore Collection →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}