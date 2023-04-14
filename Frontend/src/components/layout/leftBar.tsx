import { RiLogoutBoxRLine, RiMoneyDollarBoxLine } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { BiUserPin, BiNetworkChart } from "react-icons/bi";
import { SlNotebook } from "react-icons/sl";
import { BsBuildingLock } from "react-icons/bs";
import styles from '../../styles/Image.module.css'

export default function LeftBar() {
    const user_name = 'James'
    
    return (
        <div className="bg-[#2A347B] text-[#FFF] pt-[51px] px-[10%] h-screen">
            <div>
                <div className={styles.logoAlumni}></div>
            </div>
            <div className="flex items-center pt-[68.2px]">
                <div className="pr-4"><HiUserCircle size={48}/></div>
                { user_name }
            </div>

            <div className="pt-[15%] pb-[70%]">
                <div className="py-[10px]">
                    <button className="flex items-center bg-transparent h-12 w-full hover:bg-[#333E82] active:bg-[#505B95] font-semibold py-2 px-4 hover:border-transparent rounded">
                        <div className="text-[#40BA21] pr-4"><BiUserPin size={30}/></div>
                        <div>Personal data</div>
                    </button>
                </div>
                <div className="py-[10px]">
                <button className="flex items-center bg-transparent h-12 w-full hover:bg-[#333E82] active:bg-[#505B95] font-semibold py-2 px-4 hover:border-transparent rounded">
                        <div className="text-[#40BA21] pr-4"><SlNotebook size={24}/></div>
                        <div>Courses</div>
                    </button>
                </div>
                <div className="py-[10px]">
                    <button className="flex items-center bg-transparent h-12 w-full hover:bg-[#333E82] active:bg-[#505B95] font-semibold py-2 px-4 hover:border-transparent rounded">
                        <div className="text-[#40BA21] pr-4"><BsBuildingLock size={24}/></div>
                        <div>Pass</div>
                    </button>
                </div>
                <div className="py-[10px]">
                    <button className="flex items-center bg-transparent h-12 w-full hover:bg-[#333E82] active:bg-[#505B95] font-semibold py-2 px-4 hover:border-transparent rounded">
                        <div className="text-[#40BA21] pr-4"><BiNetworkChart size={24}/></div>
                        <div>Community</div>
                    </button>
                </div>
                <div className="py-[10px]">
                    <button className="flex items-center bg-transparent h-12 w-full hover:bg-[#333E82] active:bg-[#505B95] font-semibold py-2 px-4 hover:border-transparent rounded">
                        <div className="text-[#40BA21] pr-4"><RiMoneyDollarBoxLine size={24}/></div>
                        <div>Donation</div>
                    </button>
                </div>
            </div>

            <div className="flex items-center">
                <button className="flex items-center bg-transparent h-12 w-full hover:bg-[#333E82] active:bg-[#505B95] font-semibold py-2 px-4 hover:border-transparent rounded">
                    <div className="text-[#40BA21] pr-4"><RiLogoutBoxRLine size={24}/></div>
                    <div>Log Out</div>
                </button>
            </div>
        </div>
    )
}