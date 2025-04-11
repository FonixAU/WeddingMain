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
        className="rounded-xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs 
        hover:bg-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Donate here!
      </button>

      {isOpen && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
       <div className="relative w-auto bg-white rounded-lg overflow-hidden shadow-lg flex flex-col p-2">
         <div className="text-lg font-bold text-indigo-500 mb-4">
          Options
         </div>
         <div className="flex flex-col border-2 rounded-xl border-indigo-500 
         flex items-center justify-center text-white mb-3 w-fit mx-auto p-2
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
        
         {/* PayPal Logo Centered */}
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
           className="size-7 absolute top-2 right-2 p-1.5 bg-red-700 rounded-full hover:bg-red-800"
         >
           <Exit />
         </button>
       </div>
     </div>
      )}
    </div>
  );
}
