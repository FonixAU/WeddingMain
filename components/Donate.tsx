import { useState } from "react";
import Image from "next/image";
//Icons
import Exit from "./Icons/Exit";
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
       <div className="relative w-auto bg-[#F9F6EE] rounded-lg overflow-hidden shadow-lg flex flex-col p-2">
         <div className="font-bold title clabel mt-2 mb-4">
          Options
         </div>
         <div className="flex flex-col items-center justify-center subtitle mb-3 w-fit mx-auto p-2
          font-bold tracking-tight">
         <span className="flex inline-block">
            Acc Name: Honeymoon
        </span>
        <span className="flex inline-block">
            BSB: 659000
        </span>
        <span className="flex inline-block">
          Acc No: 775117S37
        </span>
        </div>
         {/* QR Code at the Bottom */}
         <div className="mb-3 flex justify-center">
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
           className="size-9 absolute top-2 right-2
           p-1 container circle"
          >
           <Exit />
         </button>
       </div>
     </div>
      )}
    </div>
  );
}
