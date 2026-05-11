"import { useMemo, useState } from \"react\";
import { Header } from \"../components/Header\";
import { Hero } from \"../components/Hero\";
import { RomCard } from \"../components/RomCard\";
import { RomDetailDialog } from \"../components/RomDetailDialog\";
import { GuideSection } from \"../components/GuideSection\";
import { Footer } from \"../components/Footer\";
import { ROMS } from \"../data/roms\";

export default function Home() {
  const [activeRom, setActiveRom] = useState(null);
  const [filter, setFilter] = useState(\"ALL\");

  const roms = useMemo(
    () => ROMS.filter((r) => r.type !== \"RECOVERY\"),
    []
  );
  const recoveries = useMemo(
    () => ROMS.filter((r) => r.type === \"RECOVERY\"),
    []
  );

  const visibleRoms =
    filter === \"ALL\" ? roms : roms.filter((r) => r.type === filter);

  return (
    <div className=\"min-h-screen flex flex-col\" data-testid=\"home-page\">
      <Header />
      <Hero />

      {/* ROMs section */}
      <section
        id=\"roms\"
        className=\"max-w-7xl mx-auto px-5 lg:px-10 py-10 lg:py-16 w-full\"
      >
        <div className=\"flex items-end justify-between flex-wrap gap-4 mb-10\">
          <div>
            <div className=\"font-mono-x text-[11px] tracking-[0.22em] uppercase text-orange\">
              01 — Catalog
            </div>
            <h2 className=\"font-display text-4xl sm:text-5xl font-semibold tracking-tight mt-2\">
              Available ROMs
            </h2>
            <p className=\"text-zinc-400 mt-3 max-w-xl\">
              Stable, 64-bit custom firmware for the Infinix GT 20 Pro (X6871).
              Click a card to view changelogs, requirements &amp; flashing
              instructions.
            </p>
          </div>

          <div
            className=\"inline-flex p-1 rounded-full glass\"
            data-testid=\"rom-filter\"
          >
            {[\"ALL\", \"ROM\"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 h-9 rounded-full text-xs font-mono-x uppercase tracking-[0.16em] transition-all ${
                  filter === t
                    ? \"bg-orange text-black\"
                    : \"text-zinc-400 hover:text-white\"
                }`}
                data-testid={`filter-${t.toLowerCase()}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className=\"grid sm:grid-cols-2 lg:grid-cols-3 gap-6\">
          {visibleRoms.map((rom, i) => (
            <RomCard
              key={rom.id}
              rom={rom}
              index={i}
              onOpen={(r) => setActiveRom(r)}
            />
          ))}
        </div>
      </section>

      {/* Recovery section */}
      <section
        id=\"recovery\"
        className=\"max-w-7xl mx-auto px-5 lg:px-10 py-10 lg:py-16 w-full\"
      >
        <div className=\"mb-10\">
          <div className=\"font-mono-x text-[11px] tracking-[0.22em] uppercase text-orange\">
            02 — Recovery
          </div>
          <h2 className=\"font-display text-4xl sm:text-5xl font-semibold tracking-tight mt-2\">
            Custom Recovery
          </h2>
          <p className=\"text-zinc-400 mt-3 max-w-xl\">
            Flash this first before installing any ROM. Required for the entire
            flashing workflow.
          </p>
        </div>

        <div className=\"grid sm:grid-cols-2 lg:grid-cols-3 gap-6\">
          {recoveries.map((rom, i) => (
            <RomCard
              key={rom.id}
              rom={rom}
              index={i}
              onOpen={(r) => setActiveRom(r)}
            />
          ))}
        </div>
      </section>

      <GuideSection />

      <Footer />

      <RomDetailDialog
        rom={activeRom}
        open={!!activeRom}
        onOpenChange={(o) => !o && setActiveRom(null)}
      />
    </div>
  );
}
"