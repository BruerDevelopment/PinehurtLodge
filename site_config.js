
const HOSTNAME = "Pinehurst-Lodge.com";
const BASE_PATH = "";
export const CONFIG = {
    HOSTNAME,
    BASE_PATH,
    BASE_URL: `https://${HOSTNAME}${BASE_PATH}`,
    page_meta: {
        title: "Pinehurst Lodge",
        description:`
            Pinehurst Lodge is a luxury, 4 bedroom mountain retreat near Denver 
            with fabulous views of the Continental Divide from its hot tub, decks and living areas.  
        `.replaceAll("\n", "").replaceAll("\t", "").replaceAll("  ", "")
    },
    google_as_id:undefined
}