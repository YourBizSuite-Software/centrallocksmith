import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Central Locksmith | 24/7 Locksmith in Houston TX – Car, Home & Business Lockouts",
  description:
    "Central Locksmith is a 24/7 mobile locksmith in Houston, TX. Fast arrival for car lockouts, house lockouts, business lockouts, lock change, rekeying, car key replacement and remote programming in Houston, Katy, Sugar Land, Cypress, Spring, The Woodlands and all surrounding areas.",
  alternates: {
    canonical: "https://thecentrallocksmith.com",
  },
  keywords: [
    "locksmith Houston",
    "emergency locksmith Houston",
    "24 hour locksmith Houston",
    "car lockout Houston",
    "automotive locksmith Houston",
    "house lockout Houston",
    "residential locksmith Houston",
    "commercial locksmith Houston",
    "locksmith near me Houston",
    "Houston TX locksmith",
    "Katy locksmith",
    "Sugar Land locksmith",
    "Cypress locksmith",
    "Spring TX locksmith",
    "The Woodlands locksmith",
    "Pearland locksmith",
    "Pasadena TX locksmith",
    "Humble locksmith",
    "Kingwood locksmith",
    "Richmond TX locksmith",
    "Rosenberg locksmith",
    "Baytown locksmith",
    "League City locksmith",
    "Tomball locksmith",
    "mobile locksmith Houston",
    "car key replacement Houston",
    "car key programming Houston",
  ],
  openGraph: {
    title:
      "Central Locksmith | 24/7 Locksmith in Houston TX – Car, Home & Business",
    description:
      "Central Locksmith provides fast mobile locksmith services in Houston, TX and nearby suburbs. Car lockouts, home lockouts, lock changes, rekeying, car key cutting and remote programming.",
    url: "https://thecentrallocksmith.com",
    type: "website",
    locale: "en_US",
  },
};

const PHONE_DISPLAY = "(346) 763-3703";
const PHONE_TEL = "tel:+13467633703";

type Service = {
  title: string;
  image: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Car Lockout",
    image: "/carlockout.JPG",
    description:
      "We open your vehicle's door without any damage or drilling. We use professional car lock picking tools to get you back on the road quickly and safely.",
  },
  {
    title: "Home Lockout",
    image: "/homelockout.JPG",
    description:
      "We unlock your house door without breaking the lock or damaging your door. We use non-destructive methods for safe and professional entry.",
  },
  {
    title: "Business Lockout",
    image: "/businesslockout.JPG",
    description:
      "We open your office or store without damaging the lock or door, using professional pick tools and advanced techniques for fast and safe access.",
  },
  {
    title: "Lock Change",
    image: "/lockchange.JPG",
    description:
      "Need to change your locks? We install new locks to secure your home or business professionally and efficiently.",
  },
  {
    title: "Car Key Made",
    image: "/carkey.JPG",
    description:
      "We cut new car keys on-site with precision and accuracy. Lost your key? We can make a replacement quickly!",
  },
  {
    title: "Car Key & Remote Programming",
    image: "/remoteprogram.JPG",
    description:
      "We program car keys, key fobs, and remotes for most makes and models. Fast, reliable, and professional programming services.",
  },
  {
    title: "Rekeying",
    image: "/rekying.JPG",
    description:
      "We reconfigure your existing locks so old keys will no longer work, improving your home and business security quickly and professionally.",
  },
];

function CallNowButton({ full }: { full?: boolean }) {
  return (
    <a
      href={PHONE_TEL}
      className={`inline-flex items-center justify-center rounded-full 
      bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white
      px-6 py-2 text-sm font-semibold shadow-[0_0_25px_rgba(255,215,0,0.35)]
      ring-1 ring-yellow-300/40 hover:brightness-110 transition active:scale-95
      ${full ? "w-full text-base py-3" : ""}`}
    >
      {PHONE_DISPLAY}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-[#0d152b] to-[#111a33] text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-black ring-2 ring-blue-500/60 shadow-lg shadow-blue-900/40">
              <Image
                src="/central-logo.png"
                alt="Central Locksmith Houston TX logo"
                fill
                sizes="60px"
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">
                Central Locksmith – Houston, TX
              </p>
              <p className="text-[11px] text-gray-400">
                24/7 Emergency Mobile Locksmith Service
              </p>
            </div>
          </div>

          <CallNowButton />
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 pb-10 pt-8 md:flex-row md:items-stretch">
          <div className="flex-1 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-[11px] font-medium text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
              Fast mobile locksmith • Houston & surrounding areas • 24/7
            </span>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Locked out in Houston, TX? Lost your keys?{" "}
              <span className="block bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
                Central Locksmith has you covered.
              </span>
            </h1>

            <p className="max-w-lg text-sm leading-relaxed text-gray-300">
              Central Locksmith is a local mobile locksmith serving Houston and
              nearby cities. We handle car lockouts, house lockouts, business
              lockouts, lock changes, rekeying, and car key programming with
              fast arrival times and damage-free service.
            </p>

            <p className="max-w-lg text-xs leading-relaxed text-blue-200/80">
              Serving Houston, Katy, Sugar Land, Cypress, Spring, The
              Woodlands, Pearland, Pasadena, Humble, Kingwood, Richmond,
              Rosenberg, Baytown, League City, Tomball and most Greater Houston
              suburbs.
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <CallNowButton full />
              <p className="text-[11px] text-gray-400">
                Tap to call now — a locksmith technician in Houston will be
                dispatched immediately.
              </p>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#0a1122] to-black p-5 shadow-2xl shadow-black/70">
              <div className="flex items-center gap-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-black/80 ring-2 ring-blue-500/70 shadow-md shadow-blue-900/40">
                  <Image
                    src="/central-logo.png"
                    alt="Central Locksmith logo"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-200">
                    Emergency Locksmith Hotline – Houston
                  </p>
                  <p className="text-xl font-semibold text-blue-300">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-gray-200">
                <p className="rounded-xl bg-white/5 px-3 py-2">
                  • Car lockouts & keys
                </p>
                <p className="rounded-xl bg-white/5 px-3 py-2">
                  • Home & apartment lockouts
                </p>
                <p className="rounded-xl bg-white/5 px-3 py-2">
                  • Business & office lockouts
                </p>
                <p className="rounded-xl bg-white/5 px-3 py-2">
                  • Lock change & rekeying
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Professional Locksmith Services in Houston, TX
          </h2>
          <p className="mt-1 text-sm text-blue-200/70">
            Fast • Reliable • Damage-Free • Local to Greater Houston
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1122] via-[#0f172a] to-black shadow-xl shadow-black/60 transition hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-blue-800/40 ${
                  index === services.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="px-4 pb-5 pt-3">
                  <h3 className="text-center text-lg font-semibold text-blue-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-center text-sm text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MIDDLE CALL */}
          <div className="mt-8 rounded-3xl border border-blue-500/30 bg-blue-500/10 px-4 py-6 text-center shadow-lg shadow-blue-900/40">
            <p className="text-sm font-medium text-blue-100">
              Locked out right now in Houston?
            </p>
            <p className="mt-1 text-xs text-blue-200/80">
              Call Central Locksmith and a nearby technician will head to your
              location immediately anywhere in the Greater Houston area.
            </p>
            <div className="mt-3 flex justify-center">
              <CallNowButton />
            </div>
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE + SEO CONTENT */}
      <section className="border-b border-white/10 bg-black/30">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <h2 className="text-xl font-semibold tracking-tight">
            Houston Locksmith – Areas We Serve
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Central Locksmith is a fully mobile locksmith based in Houston, TX.
            We proudly serve drivers, homeowners, and businesses throughout the
            Greater Houston metro area.
          </p>

          <div className="mt-4 grid gap-4 text-xs text-blue-100 sm:grid-cols-2">
            <ul className="space-y-1">
              <li>• Houston (all zip codes)</li>
              <li>• Katy</li>
              <li>• Sugar Land</li>
              <li>• Cypress</li>
              <li>• Spring</li>
              <li>• The Woodlands</li>
              <li>• Tomball</li>
            </ul>
            <ul className="space-y-1">
              <li>• Pearland</li>
              <li>• Pasadena</li>
              <li>• Baytown</li>
              <li>• Humble & Kingwood</li>
              <li>• Richmond & Rosenberg</li>
              <li>• League City & Friendswood</li>
              <li>• Many other Houston suburbs</li>
            </ul>
          </div>

          <p className="mt-4 text-xs text-gray-300">
            Whether you searched for “locksmith near me”, “car locksmith
            Houston”, or “24 hour locksmith in Houston TX”, Central Locksmith
            is ready to help with fast, reliable, on-site service.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/80">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-gray-400">
          <p>
            Phone:{" "}
            <a href={PHONE_TEL} className="text-blue-300 underline">
              {PHONE_DISPLAY}
            </a>{" "}
            • Available 24/7 in Greater Houston
          </p>
          <p className="mt-1 text-[10px] text-gray-500">
            © {new Date().getFullYear()} Central Locksmith. All rights
            reserved.
          </p>
          <p className="mt-1 text-[10px] text-gray-500">
            Website developed by{" "}
            <a
              href="https://yourbizsuite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              YourBizSuite Software
            </a>
            .
          </p>
        </div>
      </footer>

      {/* MOBILE CTA */}
      <div className="fixed bottom-4 left-0 right-0 z-40 px-4 sm:hidden">
        <div className="mx-auto max-w-sm rounded-full bg-black/70 p-1 backdrop-blur shadow-blue-900/40 shadow-2xl">
          <CallNowButton full />
        </div>
      </div>
    </main>
  );
}