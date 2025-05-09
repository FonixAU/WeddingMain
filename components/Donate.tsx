import { useState } from "react";
import Image from "next/image";
//Icons
import Exit from "./Icons/Exit";
import PayPal from "./Icons/PayPal";

export default function Donate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="button is-large secondary clabel">
        Donate here!
      </button>

      {isOpen && (
       <div className="fixed inset-0 flex items-center justify-center bg-[#F9F6EE] bg-opacity-50 z-50">
       <div className="relative w-auto bg-black rounded-lg overflow-hidden shadow-lg flex flex-col p-2">
         <div className="text-lg font-bold text-indigo-500 mb-4">
          Options
         </div>
         <div className="flex flex-col border-2 rounded-xl border-indigo-500 
         flex items-center justify-center text-black mb-3 w-fit mx-auto p-2
          text-base font-semibold tracking-tight">
         <span className="flex inline-block text-indigo-500">
            Acc Name: Honeymoon
        </span>
        <span className="flex inline-block text-indigo-500">
            BSB:
        </span>
        <span className="flex inline-block text-indigo-500">
          Acc No:
        </span>
        </div>
        
         {/* PayPal Logo Centeblack */}
         <div className="flex self-center size-11">
           <PayPal />
         </div>

         {/* QR Code at the Bottom */}
         <div className="mt-auto flex justify-center">
           <Image
             src="/qr-code.png"
             alt="Donate Image"
             width={190} // Adjust size as needed
             height={190} // Adjust size as needed
           />
         </div>

         {/* Exit Button */}
         <button
           onClick={() => setIsOpen(false)}
           className="size-7 absolute top-2 right-2 p-1.5 bg-black-700 rounded-full hover:bg-black-800"
         >
           <Exit />
         </button>
       </div>
     </div>
      )}
    </div>
  );
}
