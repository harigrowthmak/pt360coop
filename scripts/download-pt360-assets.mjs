#!/usr/bin/env node
// Download PT360 brand assets (logo, hero, photos, favicons) to public/pt360/
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const OUT_BASE = new URL("../public/pt360/", import.meta.url);

// rename map: source URL → local filename (under public/pt360/)
const assets = [
  // Logo + header swirl
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/pt360_logo.df34ee0471bf827106806e0ab7355724.png", out: "logo.png" },
  { url: "https://pt360coop.com/images/header_bg_1.png", out: "header-swirl.png" },

  // Hero / section photography
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/PT_360-015-14-print.2c12398ef76a059efc1d8995780a3079.6cb877d0ab4eff684461622e8a91bced.jpg", out: "hero-manual-therapy.jpg" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/williston__gym_space_2min.f87dddcd79ab2b6d2d10a94646afd7cd.7eff0df1c6d8299c9fcc9f814b9ce8fd.jpg", out: "williston-gym.jpg" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/PT_360-011-05-print.c92788411d542262999d6fb632022134.6cb877d0ab4eff684461622e8a91bced.jpg", out: "clinic-walk.jpg" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/Team%202023%20-%20cropped.40cd13dc8ee6c071a8d9f6212420427b.40397f295019c215d62588976844134d.jpg", out: "team-2023.jpg" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/Post%20Concussion%20027.2f6b6cce0339b87cee5cc5dd07ef8048.141ab7a5729db0af775068ca8c6490c7.jpg", out: "post-concussion.jpg" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/WR6.82432ef1540dd388eb39ab36baaa377b.141ab7a5729db0af775068ca8c6490c7.jpg", out: "wellness.jpg" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/Pic%20-%202024%20Sept%203.b32cfe0c44720c3cac15c6256effc6a9.fce513ef88a4eb38ecba305a3c87371d.jpg", out: "feature-sept.jpg" },

  // Partner logos
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/Synergy%20Logo.ed490cab219f3dcb9016a39a5e86477e.ca016cfe544296a4f0120af39bb51631.png", out: "partners/synergy.png" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/VEOC%20logo.83f8fccb4fca4cbb911586c28435e603.65ea46f92216fd41677155028e7fc23e.jpg", out: "partners/veoc.jpg" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/VERG%20Logo.821b4e4b15e6f8909025436f642ac6e1.ca016cfe544296a4f0120af39bb51631.png", out: "partners/verg.png" },
  { url: "https://pt360coop.com/assets/components/phpthumbof/cache/Stram%20Center.f0e45410f26ca6f4f33b9539691e0584.ca016cfe544296a4f0120af39bb51631.png", out: "partners/stram.png" },

  // Favicons
  { url: "https://pt360coop.com/images/favicons/apple-touch-icon.png", out: "favicons/apple-touch-icon.png" },
  { url: "https://pt360coop.com/images/favicons/favicon-32x32.png", out: "favicons/favicon-32x32.png" },
  { url: "https://pt360coop.com/images/favicons/favicon-16x16.png", out: "favicons/favicon-16x16.png" },
  { url: "https://pt360coop.com/images/favicons/favicon.ico", out: "favicons/favicon.ico" },
  { url: "https://pt360coop.com/images/favicons/safari-pinned-tab.svg", out: "favicons/safari-pinned-tab.svg" },
  { url: "https://pt360coop.com/images/favicons/manifest.json", out: "favicons/manifest.json" },
];

async function fetchAndSave({ url, out }) {
  const dest = new URL(out, OUT_BASE);
  const path = dest.pathname;
  await mkdir(dirname(path), { recursive: true });
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        Referer: "https://pt360coop.com/",
        Accept: "*/*",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path, buf);
    return { url, out, ok: true, bytes: buf.length };
  } catch (err) {
    return { url, out, ok: false, error: String(err.message || err) };
  }
}

// Parallel with concurrency 4
const queue = [...assets];
const results = [];
async function worker() {
  while (queue.length) {
    const job = queue.shift();
    if (!job) return;
    const r = await fetchAndSave(job);
    process.stdout.write(`${r.ok ? "✓" : "✗"}  ${r.out}  ${r.ok ? `${r.bytes}b` : r.error}\n`);
    results.push(r);
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);

const ok = results.filter(r => r.ok).length;
const fail = results.filter(r => !r.ok);
console.log(`\nDone. ${ok}/${results.length} downloaded.`);
if (fail.length) {
  console.log("Failed:");
  for (const f of fail) console.log("  -", f.out, "<-", f.url, "::", f.error);
  process.exit(1);
}
