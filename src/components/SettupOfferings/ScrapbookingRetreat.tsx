import ExportedImage from "next-image-export-optimizer"
import Link from "next/link"

export default () => {
    return (
        <>
            <ExportedImage
                src="/images/am_house/photo_0009.jpg"
                alt="Scrapbooking Retreat Offering Cover Photo"
                width={353}
                height={266}
                loading="lazy"
            />
            <div id="text">
                <h3>Scrapbooking Retreat </h3>
                <p>Come scrapbookers, crafters, gamers & quilters! 6 tables (3’x6’), 6 padded chairs, 6 magnifying ring lamps & 6 waste bins offer optional creative and play spaces. Request the setup ahead of time and it will be ready for you. Alternately available to set up yourself if desired.</p>
                <div id="link"><Link href="/scrapbooking-retreat">View Details Of The Scrapbooking Retreat</Link></div>
            </div>
        </>
    )
}