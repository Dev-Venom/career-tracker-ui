const COMPANY_DOMAINS = {
  google: "google.com",
  microsoft: "microsoft.com",
  amazon: "amazon.com",
  apple: "apple.com",
  meta: "meta.com",
  netflix: "netflix.com",
  cognizant: "cognizant.com",
  infosys: "infosys.com",
  tcs: "tcs.com",
  wipro: "wipro.com",
  zoho: "zoho.com",
  freshworks: "freshworks.com",
  juspay: "juspay.in",
};




export function getCompanyLogo(jobUrl) {
  if (!jobUrl) return null;

  try {
    const url = new URL(jobUrl);

    return `https://icons.duckduckgo.com/ip3/${url.hostname}.ico`;
  } catch {
    return null;
  }
}