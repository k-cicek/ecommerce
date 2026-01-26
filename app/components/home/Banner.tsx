import Image from "next/image"

const Banner = () => {
    return (
        <section className="w-full">
            <div className="relative w-full aspect-[16/5]">
                <Image
                    src="/banner.jpeg"
                    alt="Kampanya banner"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    className="object-cover object-center"
                    placeholder="empty"
                />
            </div>
        </section>
    )
}

export default Banner