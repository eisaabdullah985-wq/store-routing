import logo from '../assets/logo.png'

export default function Footer() {
    return (
        <div className="bg-black w-full py-4 flex flex-col items-center text-white gap-1 px-4">
            <div className="flex items-center">
                <img className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" src={logo} alt="Store Logo"/>
                <p className="font-semibold text-base md:text-lg ml-2">Online Store</p>
            </div>
            <p className="text-xs md:text-sm opacity-80 text-center">
                © 2025 Online Store. All rights reserved.
            </p>
        </div>
    )
}