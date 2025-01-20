import ExportedImage from "next-image-export-optimizer"
import Link from "next/link"

export default () => {
    return (
        <>
            <ExportedImage
                src="/images/local_attractions/skiing/photo_0003.webp"
                alt="Cozy Ski Cabin Offering Cover Photo"
                width={353}
                height={266}
                loading="lazy"
            />
            <div id="text">
                <h3>Cozy Ski Cabin </h3>
                <p>Pinehurst Lodge sits in the high country of Colorado’s Front Range at approximately 8900’, thus offering easy access to Colorado’s many ski areas including Winter Park, Breckenridge, Arapahoe Basin, Keystone, Copper Mountain and just 20 minutes from Eldora.</p>
                <div id="link"><Link href="/cozy-ski-cabin">View Details Of The Ski Cabin</Link></div>
            </div>
        </>
    )
}