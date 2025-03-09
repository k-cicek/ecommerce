import Image from "next/image"

const Banner = () => {
    return (
        <div className="h-[237px] flex items-center justify-center">
            <div className="h-[237px] relative w-full">
                <Image src={"/banner.jpeg"} fill alt="" className="object-cover" />
            </div>
        </div>
    )
}

export default Banner