# Content Audit — PT360 Coop Next.js Clone

Audit date: 2026-05-28
Scope: 14 component/page files in `src/components/*` and `src/app/service/aquatic-therapy/page.tsx`
Source-of-truth: `/Users/hariprasad/Desktop/pt360coop/{01..04}*.md`

Legend:
- REAL = verbatim or near-verbatim from PT360 source
- ADAPTED = based on real PT360 content but rewritten/shortened
- INVENTED = placeholder, made up, or contradicts the real PT360 content

---

## Summary

- Total distinct copy blocks audited: **~125**
- REAL: **~28**
- ADAPTED: **~46**
- INVENTED (needs fix): **~51**

The clone is roughly half-real, half-fabricated. Several blocks are framework copy lifted directly from the Phisio Framer template (hero H1, eyebrows, headings like "Personalised treatment plans", "Highly experienced, certified physiotherapists", "Trusted by athletes, professionals & families", etc.) rather than PT360 voice. Testimonial quotes, stat numbers, blog excerpts, and the entire Aquatic Therapy service page were also rewritten freely instead of drawn from the source.

Highest-priority fixes (in order of impact): testimonial quotes that misattribute therapists or fabricate words, the "27+ team members" stat, the entire featured testimonial on the Aquatic Therapy page (Barb did not write about a pool — she wrote about a horse, with Laura, not Kristi), and the Aquatic Therapy hero/intro/3-step copy.

---

## INVENTED items requiring replacement (PRIORITY)

### Hero.tsx

- **Hero.tsx:13** — Current: `"Serve Quality Physiotherapy"` (eyebrow)
  - **Why invented:** Verbatim Phisio template copy. PT360 never uses the word "Physiotherapy" — they say "Physical Therapy". Grammatically broken ("Serve Quality").
  - **Suggested real replacement:** `"Better Together"` (real PT360 tagline — `03-about-patient-info.md:21`, `42`) or `"360° of Care"` (from `03-about-patient-info.md:28`, `43`).

- **Hero.tsx:18-26** — Current: `"Helping you live, pain-free, fully restored."` (H1)
  - **Why invented:** Verbatim Phisio template H1. Not on the PT360 site.
  - **Suggested real replacement:** Pull a real value-line from `03-about-patient-info.md`: `"360 degrees of care – prevention, rehabilitation, and facilitation of life-long health and wellness."` (`03:28`, `43`) or `"Come visit PT360 and feel the cooperative difference."` (`03:30`, `49`).

- **Hero.tsx:30-33** — Current: `"An employee-owned Vermont cooperative offering 360° of care — prevention, rehabilitation, and life-long wellness. Across Williston & Burlington since 2008."`
  - **Why invented:** First two clauses are ADAPTED (acceptable). **"Since 2008" is fabricated** — no founding date exists anywhere in the source files. Drop the year or replace with verifiable language: `"the only physical therapy cooperative in the nation"` (`03:16`, `41`).

- **Hero.tsx:69 ("17+") and 72-73 ("Specialty disciplines")**
  - **Why ADAPTED-borderline:** The Therapy Services index lists exactly 17 services (`02-classes...md:737-751`). Counting service pages in `01-therapy-services.md` (Aquatic, Athletic, College Health, Cranio, Custom Orthotics, Dry Needling, Lymphedema, Massage, Myofascial, Neuro, Oncology, Ortho, Postural, Sports, TMJ, Vestibular, Specialized Rehab Equipment) = 17 entries. So `17+` is defensible but `17` (no plus) is more accurate. Keep but consider dropping the `+`.

- **Hero.tsx:105 ("5.0") + 113 "Live Google Reviews"**
  - **Why invented:** No 5.0 rating is asserted anywhere in the source. Source files mention `"Leave a Review"` on Google Reviews (`02-classes...md:348`, `387`) but provide no aggregate score.
  - **Suggested replacement:** Drop the explicit number or change to `"5★ on Google"` only if verified from the live site, otherwise replace with `"Leave a Review"` CTA matching PT360's actual button text.

- **Hero.tsx:117** — Avatar lineup uses Amy/Andrew/Nina/Kristi photos under a Google Reviews card — implying these four left the reviews. They didn't. The reviewers are patients (Joy P., Linc, Barb, Leah, Marybeth M., Carolyn S.). Either change context or use generic patient avatars.

### OurExpertise.tsx

- **OurExpertise.tsx:9-11** — Current: `"The only comprehensive PCS program in Chittenden County. Sub-maximal threshold protocol to return you to your life."`
  - **Why invented:** First sentence is REAL (`02:108`). Second sentence — **"Sub-maximal threshold protocol"** — is fabricated jargon. The source mentions "exercise as early as 2-3 days following the concussion" but never names a "sub-maximal threshold protocol".
  - **Suggested real replacement:** `"The only comprehensive and research-based PCS program in Chittenden County, designed for clients experiencing ongoing symptoms."` (`02:108`).

- **OurExpertise.tsx:15-18 (Aquatic Therapy)** — Current: `"Salt-water pool at 92–93°F. Buoyancy and hydrostatic pressure unload joints and relax tight tissue."`
  - **Why ADAPTED (acceptable):** Faithful paraphrase of `01:19`, `01:617-623`. Keep.

- **OurExpertise.tsx:22-25 (Lyme Disease Rehabilitation)** — Current: `"Vermont's only program. A specialized active approach: manual lymph drainage, exercise and education."`
  - **Why invented:** `"Vermont's only program"` is **not in source**. The source says PT360 offers `"specifically designed, active approaches for life-long management"` (`01:252`) but never claims it is the only program in Vermont. Also, Lyme rehab is handled by Lisa Tidman / lymphedema service (`01:255-256`, `04:419-420`) — not described as a standalone Lyme program in the service files (it's mentioned under the Lyme Disease support group at `03:452-453`).
  - **Suggested real replacement:** Either pull from Lymphedema page directly: `"Manual lymph drainage, skin-care education, remedial exercise and aquatic therapy for life-long management."` (paraphrased from `01:245-252`), or use the Lyme group line: `"Monthly Lyme Disease Support Group meetings at our Williston office — first Saturday of every month."` (from `03:453`).

- **OurExpertise.tsx:41-42** — H2: `"Personalised treatment plans tailored to your recovery."`
  - **Why invented:** Phisio template copy (UK spelling "Personalised"). Not on PT360.
  - **Suggested real replacement:** `"Specifically designed, active approaches for life-long management."` (`01:252`) or `"We provide 360 degrees of care."` (`03:28`).

### WhyChooseUs.tsx

- **WhyChooseUs.tsx:6-9 (reasons list)** — All four bullets are paraphrased Phisio template content. `"Personalised treatments & therapy goals"` and `"Highly experienced, certified physiotherapists."` use UK spelling and "physiotherapist" (PT360 says "physical therapist"). `"Skilled therapists & friendly staff"` and `"Specialized rehab equipment under one roof"` are ADAPTED — the second is supported by `03:21` ("under one roof") and `01:603-638` (Alter-G, Salt Water Pool, BIOMAT, Cold Laser).
  - **Suggested real replacements:**
    - `"Employee-owned, the only PT cooperative in the nation"` (`03:16`, `41`)
    - `"Better Together — strength, skills, services under one roof"` (`03:21`)
    - `"360° of care — prevention, rehabilitation, life-long wellness"` (`03:28`)
    - `"Specialized rehab equipment — Alter-G, salt-water pools, BIOMAT, cold laser"` (`01:605-628`)

- **WhyChooseUs.tsx:26-28** — H2: `"Highly experienced, certified physiotherapists."`
  - **Why invented:** Phisio template; wrong noun ("physiotherapists" — PT360 always says "Physical Therapists" or "PTs"). Drop or replace with PT360 language.
  - **Suggested real replacement:** `"Board-Certified Clinical Specialists. Athletic Trainers. Strength & Conditioning Specialists."` (`01:404-405`, `01:480`) — names actual credentials.

- **WhyChooseUs.tsx:63 ("PT360 clinic — therapist and patient")** — Image alt is generic but fine. The video card itself is invented (the source has no video on the page). Either remove or replace the play button with a real photo treatment.

### StatsCounter.tsx

- **StatsCounter.tsx:9** — `"17+ Specialty disciplines under one cooperative roof"` — Reasonable. ADAPTED (count = exactly 17 services).
- **StatsCounter.tsx:10** — `"27+ Employee-owners, therapists & front-desk team"` — **Invented.**
  - **Why invented:** The Williston team list shows ~19 people (`02:325-345`) and Burlington shows 7 (`02:378-384`) = 26 named individuals. The Williston page text says "21 team members" (`02:345`). 27 is approximately correct but the label "Employee-owners" is misleading — only some are owners (Amy, Andrew, Heather Chernyshov, Heather Graber, Kristi, Nina, Wendy). Most are employees, not owners.
  - **Suggested replacement:** `"26 Team members across Williston & Burlington"` (exact count from `02:325-384`) or `"7 Employee-owners"` (count of titled "& Owner" bios in `04`).
- **StatsCounter.tsx:11** — `"24+ Years of practice from senior clinicians"` — **Invented.**
  - **Why invented:** No "24+ years" figure exists in the source. Real numbers in `04-team-bios.md`: Kristi has 25+ years (`04:367`); Laura has 32+ years (`04:382`); Lori has 28 years (`04:449`); Heather Chernyshov since 1994. So the *longest* tenure is 32+ years, not 24.
  - **Suggested replacement:** `"32+ Years of practice from senior clinicians"` (Laura, `04:382`) — or pick a different metric entirely.
- **StatsCounter.tsx:12** — `"2 Vermont locations — Williston & Burlington"` — REAL (`02:283-296`). Keep.

### CaseStudy.tsx

- **CaseStudy.tsx:6** — `Joy P. / "Hip replacement recovery" / brand: "Nina, PT"` — Therapist + condition is REAL (`03:670-671`). Keep.
- **CaseStudy.tsx:7** — `Leah / "Ultra-trail marathon return" / brand: "Jim & Debbie"`
  - **Why partially invented:** Leah did work with Jim and Debbie (`03:667-668`), but **the role/header `"Ultra-trail marathon return"`** is invented. Source says: `"As an ultra trail marathon runner I had taught myself to push through..."` and `"recovery of a double hamstring injury"`. So the *condition* she was treated for was a **double hamstring injury**, not a "marathon return".
  - **Suggested replacement:** Change role to `"Double hamstring injury — ultra-trail runner"`.
- **CaseStudy.tsx:8** — `Marybeth M. / "Total knee replacement" / brand: "Nina, PT"` — REAL (`03:676-677`). Keep. But **avatar is `/pt360/team/amy.jpg`** — Marybeth's testimonial credits Nina, so the avatar should be `nina.jpg`, not `amy.jpg`.
- **CaseStudy.tsx:7 avatar** — Leah's avatar is `andrew.jpg` but Leah worked with **Jim** (Jim Cummings, from `01:490`) and Debbie. Andrew did not treat her. Either use Debbie's photo or a patient stand-in.
- **CaseStudy.tsx:28** — H2: `"Trusted by athletes, professionals & families."`
  - **Why invented:** Phisio template copy.
  - **Suggested real replacement:** `"Real Vermont patients. Real recoveries."` or pull a real ribbon: PT360's actual page is titled simply `"Testimonials"` (`03:657`).

### Testimonials.tsx

- **Testimonials.tsx:11-12** — Joy P. quote: `"Nina has been my PT for years. She knows just what to do to help me progress to the next phase of recovery — warm, careful and expert."`
  - **Why ADAPTED:** First sentence is real (`03:671`). Second sentence is paraphrased ("warm, careful and expert" is not in source — Joy actually wrote: `"welcomes me to my appointment with warmth and caring"`). Acceptable but could be tightened to source words.
  - **Suggested:** `"Nina has been my PT for years. She always welcomes me to my appointment with warmth and caring, and knows just what to do to help me progress."` (verbatim fragments from `03:671`).
- **Testimonials.tsx:16-18** — Marybeth M. quote: `"Her combination of skill, intuition, compassion and humour is unmatched. After surgery she helped me regain range of motion and strength."`
  - **Why ADAPTED:** Very close to source (`03:677`: "Her combination of skill, intuition, compassion and humor are unmatched...After surgery her skill helped me successfully regain range of motion and strength."). Acceptable. UK "humour" should be "humor" (US, matches source).
- **Testimonials.tsx:21-24** — Linc quote: `"Skiing is enjoyable again. Ski Patrol duties are much easier. PT360 exceeded my expectations and I accomplished all of my goals."`
  - **Why REAL:** Verbatim from `03:662`. Keep.
- **Testimonials.tsx:20** — Linc's `date: "Ski Patrol — quad & hip pain"` — ADAPTED, matches `03:662` ("chronic quad and hamstring tightness, hip spasms and hip and quad pain"). Acceptable.
- **Testimonials.tsx:118 ("3,500+")** + 131 (`"Happy patients across Vermont"`)
  - **Why invented:** No patient-count figure anywhere in the source. 3,500 is fabricated.
  - **Suggested replacement:** Drop the number entirely, or change to `"Two Vermont locations · 26 team members"` (a number that is supportable from `02:283-296` and `02:325-384`).

### MeetTeam.tsx

- **MeetTeam.tsx:8** — Amy `"PT, DPT, SCS, CSCS · Owner"` — REAL (`04:24`, `04:27`). Keep.
- **MeetTeam.tsx:13** — Andrew `"PT, DPT, SCS, ATC · Owner"` — REAL (`04:58`, `04:61`). Keep.
- **MeetTeam.tsx:18** — Nina `"PT, DPT · Executive Director"` — REAL (title is `"Physical Therapist & Owner / Executive Director of PT360"` per `04:489`). Reasonable compression.
- **MeetTeam.tsx:23** — Kristi `"PT, MSPT, CLT · Owner"` — REAL (`04:346`, `04:349`). Keep.
- **MeetTeam.tsx:41** — H2: `"Meet a few of our employee-owners."` — REAL voice (employee-owner is a real PT360 term, `02:332`, `03:16`). ADAPTED-clean.
- **MeetTeam.tsx:46** — `"More Team"` button — invented label. Source uses page heading `"Meet The Team"` (`03:53`). Change to `"View Full Team"` or `"Meet The Team"`.
- **MeetTeam.tsx:85-93** — Social icons (Facebook/Linkedin/Instagram) with `href="#"` per team member — **invented**. No source asserts individual team-member socials. Either remove per-card socials or link to bios.

### BlogInsights.tsx

- **BlogInsights.tsx:8** — `category: "Advocacy"` — invented label, but title `"Taking action with APTA Vermont."` matches REAL post (`03:478`, with all-caps original `"TAKING ACTION WITH APTA VERMONT"`). Body is ADAPTED — close to source excerpt at `03:479`. Acceptable.
- **BlogInsights.tsx:17** — `category: "Outdoor Health"` — invented. Title `"Continuing the fight against ticks — Lyme disease rehabilitation."` is REAL (`03:484`). Body is ADAPTED from `03:485`. Acceptable.
- **BlogInsights.tsx:27** — `category: "Winter Wellness"` — invented. Title `"Hip tips for the winter months."` is REAL (`03:493`). Body — `"keeping your hips happy through the cold and the snow shovelling, the skiing, and the long sits"` — is **invented**. The real excerpt is about winter being warm/funky (`03:494`). UK "shovelling" also off-voice. Either drop the body or paraphrase from `03:494`.
- **BlogInsights.tsx:47-49** — H2: `"Notes from the cooperative."` — invented but on-voice. Acceptable as ADAPTED.
- **BlogInsights.tsx:42** — Eyebrow `"Insights"` — invented; PT360 uses `"Blog"` (`03:476`). Change to `"From the Blog"` or `"Blog"`.

### CallToAction.tsx

- **CallToAction.tsx:26** — Eyebrow `"Ready to begin?"` — invented (Phisio voice). Could be replaced with PT360 voice such as `"Make an Appointment"` (real CTA from `02:296`).
- **CallToAction.tsx:37** — H2: `"Begin your recovery today."` — invented. Replace with real CTA: `"Come visit PT360 and feel the cooperative difference."` (`03:30`, `49`).
- **CallToAction.tsx:42** — `"Williston pool. Burlington clinic. Twenty-seven specialists ready to help you live, restored, pain-free."` — invented. "Twenty-seven specialists" recycles the bad stat. Also "Burlington clinic" undersells (Burlington also offers Custom Orthotics, College Health, Postural Restoration). Replace with: `"Two Vermont locations. Williston salt-water pool. 360 degrees of care."` (sourced from `02:283-296` and `03:28`).
- **CallToAction.tsx:47** — `"Book Appointment"` — REAL/aligned (matches `02:296` `"Make an Appointment"`). Acceptable.
- **CallToAction.tsx:48** — `"Insurance & Referrals"` — REAL — matches the page title `"Insurance, Referrals, & Co-pays"` (`03:517`). Keep.

### Footer.tsx

- **Footer.tsx:31** — Williston address — REAL (`02:306`).
- **Footer.tsx:32-33** — `"Williston, VT 05495"` — REAL (`02:307`).
- **Footer.tsx:34** — `"(802) 860-4360"` — REAL (`02:318`).
- **Footer.tsx:37** — Burlington address — REAL (`02:358`).
- **Footer.tsx:38** — `"Burlington, VT 05401"` — REAL (`02:359`).
- **Footer.tsx:39** — `"(802) 657-7990"` — REAL (`02:370`).
- **Footer.tsx:57-60** — Founders quote: verbatim from `03:34` / `02:293`. **REAL**. Keep.
- **Footer.tsx:71-74** — "PT360 is an employee-owned Vermont physical therapy cooperative that recognises there are many paths to wellness — and provides 360° of care." — ADAPTED; close to `03:16-28`. UK "recognises" should be "recognizes" to match US voice.
- **Footer.tsx:5-7** — Social URLs: Facebook `PT360COOP` and Instagram `pt360coop` — REAL (`02:84`, `02:388`). LinkedIn `href="#"` — invented (no LinkedIn URL in source — drop or leave as `#`).
- **Footer.tsx:19-26 (services list)** — All six labels are REAL service names from `01-therapy-services.md`. Keep.
- **Footer.tsx:185** — `"PT360 © 2026 · All Rights Reserved"` — fine, but date is arbitrary.

### NavBar.tsx

- **NavBar.tsx:8-14 (navItems)** — `Home / About Us / Services / Team / Blog` — ADAPTED. Real top-level IA on pt360coop.com is roughly `Therapy Services / Patient Info / Classes & Programs / Locations & Hours / Meet The Team / Contact`. The clone's nav is simplified but acceptable.
- **NavBar.tsx:63** — `"Book Appointment"` — REAL spirit; actual PT360 CTA is `"Make an Appointment"` (`02:296`). Either is acceptable; using PT360's exact wording would be best.

### StickyScalingImage.tsx

- **StickyScalingImage.tsx:18-20** — Mission `"Provide 360° of care — prevention, rehabilitation, and life-long wellness — under one cooperative roof."` — ADAPTED, on-voice. (`03:28`, `03:21`)
- **StickyScalingImage.tsx:23-24** — Promise `"Vermont-owned, employee-operated. We share the work, the risk, and the love of getting you back to living."` — ADAPTED — borrows `"share in the financial risk"` (`03:16`). The phrase `"getting you back to living"` is invented but on-voice.
- **StickyScalingImage.tsx:28-29** — Practice `"Seventeen specialty disciplines, twenty-seven team members, two locations — built around your recovery."`
  - **Why partially invented:** "Seventeen" and "two" are correct. **"Twenty-seven team members"** is wrong — the Williston team list is 19 staff (`02:325-345`) + Burlington 7 (`02:378-384`) = 26 named individuals. Use `"twenty-six"` instead. (Or `"twenty-one team members"` if quoting the Williston-only figure from `02:345`.)
- **StickyScalingImage.tsx:107** — Eyebrow `"Restore Your Strength"` — invented (Phisio template). On-voice but not in source.
- **StickyScalingImage.tsx:112-113** — `"Our goal is simple — get you back to living your best life."` — invented (Phisio template).
  - **Suggested:** `"Better Together — combining the strength, skills, and services of several therapy professionals under one roof."` (`03:21`, `42`).

### src/app/service/aquatic-therapy/page.tsx

This page rewrites the entire Aquatic Therapy service. The source (`01:5-37`) has clearly defined sections that the clone reorganizes:

- **page.tsx:12** — meta description `"Salt-water pool aquatic physical therapy at PT360's Williston clinic. 92–93°F warmth, buoyancy, and hydrostatic pressure relieve pain and rebuild strength."` — ADAPTED. Faithful.
- **page.tsx:18-21** — Step 01 "Initial assessment / Your therapist meets you on land first..." — **Invented.** Source does not describe an on-land assessment as step 1. The source's flow (`01:24-25`): therapists develop personalized routines; sessions cause initial fatigue/soreness; drink water. No 3-step process described.
- **page.tsx:23-27** — Step 02 "Tailored pool programme" — uses the three pillars (buoyancy / hydrostatic pressure / heat) which ARE real (`01:14-19`), but framing as a "step" is invented.
- **page.tsx:29-33** — Step 03 "Progress to land" — ADAPTED. Source does say `"Aquatic therapy may serve as primary rehabilitation or transition to land-based programs."` (`01:25`). Acceptable.
- **page.tsx:36-41 (benefits list)** — All four bullets are REAL/ADAPTED from `01:21-22`. Keep:
  - "Salt-water pool at 92–93°F" — REAL (`01:19`)
  - "Stairs and a poolside lift for accessible entry" — REAL (`01:22`)
  - "Bars along both sides for safe balance work" — REAL (`01:22`)
  - "Therapist may enter the water for hands-on support" — REAL (`01:22`)
- **page.tsx:82-87** — H1 `"Aquatic therapy."` — REAL (`01:7`). Keep.
- **page.tsx:90-92** — `"Move, restore and rebuild in 92–93°F salt water at our Williston clinic. Buoyancy reduces joint pressure, hydrostatic pressure gives you feedback, and warmth relaxes tight tissue."` — ADAPTED. Faithful to `01:14-19`. Keep.
- **page.tsx:96** — `"How it works"` button — REAL header from source (`01:14`).
- **page.tsx:127-131** — H2 `"Why we work in water."` — ADAPTED, on-voice. Source heading is `"Why Aquatic Therapy?"` (`01:11`); use that exact phrasing instead.
- **page.tsx:134-139** — `"Exercise and movement in water offers a unique approach... unseen forces here..."` — ADAPTED. Faithful to `01:12`.
- **page.tsx:142-147** — `"Improvements in flexibility, strength and stamina... unmatched at addressing balance..."` — ADAPTED from `01:12` ("improved flexibility, strength, stamina, and 'unparalleled in addressing balance issues'"). Keep but use exact word `"unparalleled"` to mirror source.
- **page.tsx:176** — H2 `"A simple three-step path."` — invented framing.
- **page.tsx:228-230** — Featured testimonial quote: `"The pool changed how I move. After a few weeks I was walking the bars on my own — and now I'm back hiking with my grandkids."`
  - **Why INVENTED:** Not in source. No patient says this. Worse, it is attributed to **"Barb — equestrian return"** (line 237) and the avatar is **kristi.jpg**.
  - **Barb's actual testimonial** (`03:664-665`): `"Thanks to Laura, I am almost pain free, and able to ride again - and to get off the horse after 1.5 hrs with only a little stiffness... Thanks very much for being excellent and supremely knowledgeable in your profession."` — Barb worked with **Laura Clark** (Burlington), not Kristi, and her recovery is **equestrian**, which the role text does get right. But the quote, therapist (avatar), and pool context are all wrong.
  - **Suggested replacement:** Use Barb's actual quote verbatim, change avatar to a Laura placeholder or a stock patient image, and change the footer to `"Williston aquatic programme" → "Burlington — orthopedic rehab"`. OR pick a different testimonial that *is* about the pool — none of the 6 testimonials in `03:660-680` mention the aquatic pool by name. The closest is the Making Waves participant testimonial `"it's the only way I can manage my sciatica."` (`02:164`).
- **page.tsx:237** — Attribution `"Barb — equestrian return"` — half-real (Barb is real, equestrian context is right) but tied to a quote she did not write. See above.
- **page.tsx:240-242** — Stars + `"Williston aquatic programme"` — invented (Barb worked at Burlington with Laura per `03:664`).
- **page.tsx:46** — Related: `"Vermont's only comprehensive PCS program in Chittenden County."` — REAL (`02:108`, modulo "Vermont's only" vs. "the only ... in Chittenden County" — the source says Chittenden County, not Vermont). Use `"The only comprehensive PCS program in Chittenden County."`
- **page.tsx:53** — Related: `"A specialized active approach to lifelong management."` — REAL paraphrase of `01:252`.
- **page.tsx:60** — Related: `"Sport-specific rehab from recreational to elite — school-age to 80s."` — ADAPTED, faithful to `01:477`. Keep.
- **page.tsx:259** — H2: `"Explore related programmes."` — invented but on-voice.

---

## ADAPTED items (review — not urgent, but tighten to source voice)

- Hero.tsx:30-33 body paragraph (drop "since 2008")
- Hero.tsx:69 stat label `"Specialty disciplines"` (count of 17 is real; `+` is editorial)
- OurExpertise.tsx:15-18 (Aquatic) — solid paraphrase
- Testimonials.tsx Joy P. and Marybeth M. quotes (close to source, tighten to verbatim)
- BlogInsights.tsx post bodies for Amy/Beca (close), and category labels (invented but harmless)
- StickyScalingImage.tsx mission card "Our mission" / "Our promise" — on-voice
- Footer.tsx:71-74 about company paragraph — on-voice
- service/aquatic-therapy/page.tsx benefits list — accurate
- service/aquatic-therapy/page.tsx hero subhead — accurate
- service/aquatic-therapy/page.tsx Related Services cards — accurate
- ServicesIconStrip.tsx all 8 service labels — REAL service names but presented as a marquee; pure label-list, not narrative copy.

---

## REAL items (verified verbatim or near-verbatim)

- Hero.tsx: image alt "A PT360 physical therapist treats a patient"
- ServicesIconStrip.tsx: Aquatic Therapy, Athletic Training, Craniosacral Therapy, Dry Needling, Lymphedema, Sports Medicine, Vestibular Rehab, TMJ Rehabilitation — all REAL service names from `01-therapy-services.md`.
- MeetTeam.tsx credentials for Amy / Andrew / Nina / Kristi — REAL credential strings.
- Footer addresses (Williston 426 Industrial Ave Suite 190 VT 05495; Burlington 80 Colchester Ave VT 05401) — REAL.
- Footer phone numbers (802) 860-4360 (Williston) and (802) 657-7990 (Burlington) — REAL.
- Footer founders quote (Steve McGowen, Mark Scribner, George Beato, 12 members…) — REAL verbatim.
- Footer Facebook/Instagram URLs — REAL (`02:84`, `02:388`).
- Footer services list (Aquatic Therapy, Sports Medicine, Vestibular Rehabilitation, Dry Needling, Lymphedema, TMJ Rehabilitation) — REAL service names.
- Testimonials.tsx Linc quote — REAL verbatim from `03:662`.
- BlogInsights.tsx post titles: "Taking action with APTA Vermont", "Continuing the fight against ticks — Lyme disease rehabilitation", "Hip tips for the winter months" — all REAL titles from `03-about-patient-info.md:478-494`.
- BlogInsights.tsx author Amy Sheridan, Beca Meryman PT DPT, Becky Street PT DPT OCS — REAL authors.
- aquatic-therapy/page.tsx H1 "Aquatic therapy" — REAL section title.
- aquatic-therapy/page.tsx benefits list (4 bullets) — all REAL details from `01:19-22`.
- aquatic-therapy/page.tsx Sports Medicine related-card body — REAL paraphrase of `01:477`.
- aquatic-therapy/page.tsx Post-Concussion related-card body — REAL (`02:108`).
- "Insurance & Referrals" CTA in CallToAction — REAL (`03:517`).

---

## Per-component breakdown

### NavBar.tsx
Holds 5 nav items + a CTA. The nav is a simplified IA (Home/About/Services/Team/Blog) versus PT360's actual six-section site; the CTA label "Book Appointment" is close to PT360's real "Make an Appointment". Verdict: **ADAPTED but acceptable**. No invented PT360 claims.

### Hero.tsx
The hero is the worst-offender for invented copy. Eyebrow ("Serve Quality Physiotherapy"), H1 ("Helping you live, pain-free, fully restored"), and the body's "since 2008" are all imported from the Phisio template / fabricated. The 17+ stat is defensible; the 5.0 rating is unverified; the avatar lineup misleadingly implies the four owners left the reviews. Verdict: **INVENTED — needs full rewrite of eyebrow, H1, founding-year, and review-card framing.**

### StickyScalingImage.tsx
Three mission cards mix valid PT360 language ("360° of care", "share the risk", cooperative voice) with two factual errors: a Phisio-template eyebrow/H2 ("Restore Your Strength", "get you back to living your best life") and a wrong team-count ("twenty-seven" should be ~26). Verdict: **ADAPTED with one factual fix needed (team count) and an eyebrow/H2 swap.**

### OurExpertise.tsx
Three service cards. PCS card is mostly real but contains fabricated "sub-maximal threshold protocol" jargon. Aquatic card is faithful. Lyme card asserts an unsupported "Vermont's only program" claim. The H2 is verbatim Phisio template copy. Verdict: **INVENTED — fix PCS body, Lyme claim, and H2.**

### WhyChooseUs.tsx
Four reasons, an H2, and a generic video card. All copy is Phisio-template paraphrase using UK spelling and the word "physiotherapists" (PT360 uses "physical therapists"). The video doesn't exist in source. Verdict: **INVENTED — replace all four reasons and the H2 with PT360 voice; consider removing the video card or replacing it with a real photo.**

### StatsCounter.tsx
Four stats. `17+` is correct, `2` is correct, but `27+ employee-owners` (wrong number AND wrong term — only ~7 are owners) and `24+ years` (longest tenure is 32+ years) are factually wrong. Verdict: **INVENTED — fix the two middle stats.**

### CaseStudy.tsx
Three testimonial preview rows. Names and core conditions are real, but Leah's role ("marathon return" → should be "hamstring injury") and the avatar choices are wrong: Marybeth's row uses Amy's photo when her testimonial credits Nina, and Leah's row uses Andrew's photo when she worked with Jim & Debbie. H2 is Phisio template. Verdict: **ADAPTED with corrections needed on avatars, Leah's role text, and the H2.**

### Testimonials.tsx
Three full-quote cards plus a "3,500+ happy patients" trust banner. The three quotes are paraphrases of real testimonials (Joy P., Marybeth M., Linc) — close enough to be ADAPTED. The 3,500 figure is invented and should be removed or replaced. UK spelling "humour" should be "humor". Verdict: **ADAPTED quotes (tighten to verbatim), invented stat (replace or drop).**

### MeetTeam.tsx
Four cards for the four owners with correct credentials and correct executive-director title for Nina. The fabricated parts are: per-card social-media icons (no source) and the "More Team" button label. Verdict: **REAL with minor invented chrome — remove or de-emphasize per-bio socials.**

### ServicesIconStrip.tsx
Marquee of 8 service labels, all REAL service names. No prose. Verdict: **REAL.**

### BlogInsights.tsx
Three blog cards. Titles and authors are REAL; date stamps match source. Categories (Advocacy/Outdoor Health/Winter Wellness) are invented but neutral. Two of three body excerpts are close paraphrases; the "Hip tips" body is invented (real excerpt is about a warm winter, not "snow shovelling"). Eyebrow "Insights" should be "Blog" to match PT360's section name. Verdict: **ADAPTED — fix Hip-tips body and eyebrow.**

### CallToAction.tsx
Six copy blocks. Eyebrow, H1, body paragraph, and one button label are invented/Phisio-flavoured ("Begin your recovery today", "Twenty-seven specialists"). "Book Appointment" and "Insurance & Referrals" labels are PT360-aligned. Verdict: **INVENTED — rewrite eyebrow/H2/body with sourced PT360 voice; keep the two button labels.**

### Footer.tsx
Largest single concentration of REAL copy: addresses, phone numbers, founders quote, social URLs, and service-name list are all verifiable. The about-company paragraph is a clean ADAPTATION. LinkedIn link href is `#` (no source URL) — remove or de-emphasize. Verdict: **REAL with minor polish needed (drop LinkedIn link, change "recognises" to US spelling "recognizes").**

### src/app/service/aquatic-therapy/page.tsx
Mixed. The hero H1 ("Aquatic therapy"), hero subhead, the four-item benefits list, the related-services bodies, and intro paragraphs are REAL or close paraphrases of `01-therapy-services.md:5-37`. The 3-step "Our process" block (initial assessment / tailored pool / progress to land) is invented framing — no such 3-step model exists in source. The featured testimonial section is the worst block on the page: Barb is a real testimonial but the quote is fabricated, the therapist avatar is wrong (kristi.jpg — Barb actually worked with Laura Clark in Burlington), and "Williston aquatic programme" is false. Verdict: **MIXED — keep service-detail copy, rewrite the 3-step section as a real workflow (Land assessment → Pool programme → What to bring), and either drop the featured testimonial or swap in Barb's actual verbatim quote with correct attribution to Laura/Burlington.**
