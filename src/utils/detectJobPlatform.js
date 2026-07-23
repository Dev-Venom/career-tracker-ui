export default function detectJobPlatform(url) {

    const value = url.toLowerCase();

    if (value.includes("linkedin.com")) return "LINKEDIN";

    if (value.includes("naukri.com")) return "NAUKRI";

    if (value.includes("indeed.com")) return "INDEED";

    if (value.includes("glassdoor.com")) return "GLASSDOOR";

    if (value.includes("wellfound.com")) return "WELLFOUND";

    if (value.includes("monster.com")) return "MONSTER";

    if (value.includes("lever.co")) return "LEVER";

    if (value.includes("ashbyhq.com")) return "ASHBY";

    if (value.includes("greenhouse.io")) return "GREENHOUSE";

    return "OTHER";
}