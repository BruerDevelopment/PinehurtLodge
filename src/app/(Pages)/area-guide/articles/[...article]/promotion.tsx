import { ArticleMeta } from "@/hooks/getArticlesData";
import styled from "styled-components";


export default (props:ArticleMeta) => {
    if (props.promotion == undefined)
        return undefined;
    
    if (props.promotion == "default")
        return (
            <PromotionSection>
                <h1>Interested in staying in Rollinsville?</h1>
                <div id="content">
                    <p>
                        Welcome to Rollinsville, where adventure meets relaxation! Our vacation rental is the perfect getaway for those looking to immerse themselves in the natural beauty of Colorado's mountainous landscapes. Nestled in a serene and picturesque setting, our property offers cozy accommodations with all the comforts of home. Whether you're seeking a peaceful retreat or an active outdoor adventure, Rollinsville has something for everyone. Explore nearby hiking trails that lead to breathtaking views, or simply unwind and enjoy the tranquility of our charming rental. Discover why Rollinsville is a hidden gem in the Rockies and plan your escape with us today! Click the link below to learn more about our vacation rental and start planning your next adventure.
                    </p>
                    <a href="/">Learn All About Our Vacation Rental</a>
                </div>
            </PromotionSection>
        )
    if (props.promotion == "scrapbooking")
        return (
            <PromotionSection>
                <h1>Interested in Your Own Scrapbooking Retreat in Rollinsville?</h1>
                <div id="content">

                    <p>
                    Immerse yourself in the ultimate scrapbooking retreat experience at our charming vacation rental in Rollinsville! Nestled amidst the serene beauty of Colorado's mountains at an elevation of 8700 ft, our property provides the perfect backdrop for your creative getaway. Capture the essence of your adventures with stunning mountain views just outside your window. Our cozy accommodations offer everything you need to unwind and focus on preserving your precious memories. Create pages of memories in our scrapbooking studio for 6 as you take inspiration from the surrounding nature, Rollinsville promises a tranquil and inspiring retreat. Discover why our lodge is the ideal choice for scrapbook enthusiasts seeking both relaxation and creative inspiration. Click the link below to learn more about our accommodations and plan your unforgettable scrapbooking retreat today!
                    </p>
                    <a href="/scrapbooking-retreat">Learn All About Our Scrapbooking Retreat Rental</a>
                </div>
            </PromotionSection>
        )
    if (props.promotion == "skiing")
        return (
            <PromotionSection>
                <h1>Interested in A Cozy Ski Cabin with a View?</h1>
                <div id="content">
                    <p>
                        Our deluxe ski accommodations offer an unparalleled experience with breathtaking views of the Continental Divide. Nestled in close proximity to several renowned ski mountains, our cabins provide the perfect blend of comfort and convenience for your ski getaway. Whether you're planning a family adventure or a skiing trip with friends, immerse yourself in the beauty of Colorado's alpine landscapes and enjoy easy access to world-class skiing.
                    </p>
                    <a href="/cozy-ski-cabin">Learn All About Our Ski Cabin Rental</a>
                </div>
            </PromotionSection>
        )
    return undefined;
}


const PromotionSection = styled.div`
    h1 {

    }
    #content {
        border-top: 1px solid black;
        width: 100%;
        padding: 20px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        p {
            width: 100%;
        }
        a {
            background-color: var(--theme-color-3);
            border-radius: 6px;
            padding: 20px;
            color: white;
        }
    }
`