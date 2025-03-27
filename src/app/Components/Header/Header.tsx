import Logo from "../../../../public/Logo.png";
import Search from "../../../../public/Search.svg";
import Filter from "../../../../public/Filter.svg";
import Notification from "../../../../public/Notification.svg";
import Avatar from "../../../../public/Frame 38.png";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full max-w-full h-[71px] max-h-[71px] bg-white flex items-center justify-between p-7 drop-shadow-[#00000040]">
      <div className="w-fit max-w-fit flex items-center gap-[25px] border-r-3 border-[#F6F6F6] px-5">
        <Image src={Logo} alt="Logo" />
        <h1 className="text-xl font-normal leading-[100%] JianiPurva">Chuly</h1>
      </div>
      <div className="w-[80%] md:flex items-center justify-between gap-5 pr-[89px] hidden">
        <div className="flex items-center gap-[25px]">
          <div className="w-[202px] max-w-[202px] h-[33px] flex items-center gap-2.5 border-[1.5px] border-[#3E7BEA] rounded-[50px] py-[8px] px-[21px] text-black">
            <Image src={Search} alt="Search" />
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search"
              className="w-full outline-0 border-0"
            />
          </div>
          <div className="w-[85px] h-[33px] rounded-[50px] border border-[#00000099] p-2.5 gap-2.5 flex items-center justify-center">
            <Image src={Filter} alt="Filter" />
            <p className="text-[#00000099] text-xs font-medium Inter leading-[100%]">
              Filter
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[25px]">
          <Image
            src={Notification}
            alt="Notification"
            className="cursor-pointer"
          />
          <Image src={Avatar} alt="Avatar" className="cursor-pointer" />
        </div>
      </div>

      <div className="md:hidden flex items-center gap-2.5">
        <div className="w-[85px] h-[33px] rounded-[50px] border-[1.5px] border-[#3E7BEA] p-2.5 gap-2.5 flex items-center justify-center">
          <Image src={Search} alt="Search" />
          <p className="text-[#00000099] text-xs font-medium Inter leading-[100%]">
            Ctrl K
          </p>
        </div>
        <Image
          src={Notification}
          alt="Notification"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
