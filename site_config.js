
const HOSTNAME = "www.pinehurst-lodge.com";
const BASE_PATH = "";
const cleanHTMLString = require("./src/lib/cleanHTMLString")
export const CONFIG = {
    HOSTNAME,
    BASE_PATH,
    BASE_URL: `https://${HOSTNAME}${BASE_PATH}`,
    page_meta: {
        title: "Pinehurst Lodge | Your Perfect Mountain Getaway | Rollinsville Rental",
        description:cleanHTMLString(`
            Pinehurst Lodge is a luxury, 4 bedroom mountain retreat near Denver 
            with fabulous views of the Continental Divide from its hot tub, decks and living areas.  
        `)
    },
    google_as_id:undefined
}