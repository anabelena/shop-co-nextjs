import Image from "next/image";

export default function ProductCard(){

    return(
        <>
        <div>

            <div className="w-[295px] h-[298px]">
                <Image 
                src="/assets/images/tshirt-red.svg"
                alt="Red T-shirt"
                width={295}
                height={298}
                // fill
                />
            </div>

        </div>
        </>
    )
}