
import Upload from "./Upload";
export default function GalleryTitle() {
  return (
<div className="break-inside-avoid relative mb-5 flex flex-col items-center justify-end gap-4 bg-[#96aa81]/40 px-6 py-6 text-center rounded-lg text-black shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
    <h1 className=" mb-4 mt-1 title uppercase">
        Grantiz Wedding Photos
        </h1>
            <p className="max-w-[40ch] subtitle sm:max-w-[32ch]">
              Thank you for attending our wedding. Add your favourite moments here, and look through
              the pics other guests have added
            </p>
    <Upload/>
</div>
  );}