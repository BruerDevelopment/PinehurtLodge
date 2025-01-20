import ExportedImage from "next-image-export-optimizer"
import Link from "next/link"

export default () => {
    return (
        <>
            <ExportedImage
                src="/images/local_attractions/outdoors/photo_0002.jpg"
                alt="Pinehurst Lodge Mountain Exploration"
                width={353}
                height={266}
                loading="lazy"
            />
            <div id="text">
                <h3>Perfect Mountain Escape</h3>
                <p>Offering dozens of trails in all directions, Pinehurst Lodge is a hikers’ paradise. Check out the trails around Mud Lake, Caribou Ranch, James Peak & Golden Gate Canyon State Park, or stroll the beautiful area out the door of the Lodge.</p>
                <div id="link"><Link href="/outdoor-rec">View Details Of The Mountain Escape</Link></div>
            </div>
        </>
    )
}