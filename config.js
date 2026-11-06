/* Tennis Live — site config.
 * Keep this file next to tennis-live.html (or index.html) on your host.
 *
 * DB_URL already exists on your site from before (it powers "Go live",
 * the match sync, and now also Create/Join match and the All-time
 * leaderboard). Do NOT replace it with the placeholder below — copy
 * your real Firebase Realtime Database URL in, exactly as it already
 * is on your live config.js.
 */
window.DB_URL="https://tennis-match-10a29-default-rtdb.asia-southeast1.firebasedatabase.app/";

/* AVAIL_URL is only needed for the Court availability tab. Set it to
 * the /exec URL from deploying Webapp.gs as a web app in Apps Script
 * (Deploy > New deployment > Web app > Execute as Me, Who has access:
 * Anyone). If you already set this up earlier, keep your existing
 * value — don't overwrite it with the placeholder below.
 */
window.AVAIL_URL = "https://script.google.com/macros/s/AKfycbx5Ps0ibKBtOg_TJ5loXPdScPAEE-dqmSK1L-OP7n9wO_sLmRJRha0ZXvEo_RzjsRJE8g/exec";