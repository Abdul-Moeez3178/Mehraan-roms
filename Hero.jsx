"import { ChevronDown, Cpu, ShieldCheck, Smartphone } from \"lucide-react\";
import { DEVICE } from \"../data/roms\";

export const Hero = () => {
  return (
    <section
      id=\"top\"
      className=\"relative overflow-hidden grain pt-14 pb-20 lg:pt-24 lg:pb-28\"
      data-testid=\"hero-section\"
    >
      <div className=\"max-w-7xl mx-auto px-5 lg:px-10 relative z-10\">
        <div className=\"grid lg:grid-cols-12 gap-12 items-end\">
          {/* Left: copy */}
          <div className=\"lg:col-span-7 animate-fade-up\">
            <div
              className=\"inline-flex items-center gap-2 px-3 h-7 rounded-full glass-orange font-mono-x text-[11px] tracking-[0.18em] uppercase text-orange\"
              data-testid=\"hero-pill\"
            >
              <span className=\"w-1.5 h-1.5 rounded-full bg-orange pulse-dot\" />
              Stable · 64-Bit · Android 16
            </div>

            <h1
              className=\"font-display mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight\"
              data-testid=\"hero-title\"
            >
              Custom ROMs for the
              <br />
              <span className=\"text-orange\">Infinix GT 20 Pro</span>
            </h1>

            <p className=\"mt-6 max-w-xl text-zinc-400 text-base sm:text-lg leading-relaxed\">
              Hand-picked, stable ports for{\" \"}
              <span className=\"font-mono-x text-zinc-200\">X6871</span>. Ported
              by{\" \"}
              <span className=\"text-orange font-medium\">Mehrnn</span>, hosted
              cleanly — without the Telegram rabbit-holes.
            </p>

            <div className=\"mt-9 flex flex-wrap items-center gap-3\">
              <a
                href=\"#roms\"
                className=\"inline-flex items-center gap-2 h-12 px-6 rounded-full bg-orange text-black font-medium text-[15px] hover:opacity-90 hover-glow transition-all\"
                data-testid=\"hero-cta-primary\"
              >
                Browse ROMs
                <ChevronDown size={16} className=\"rotate-[-90deg]\" />
              </a>
              <a
                href=\"#guide\"
                className=\"inline-flex items-center gap-2 h-12 px-6 rounded-full glass text-white font-medium text-[15px] hover:bg-white/5 transition-all\"
                data-testid=\"hero-cta-secondary\"
              >
                Flashing Guide
              </a>
            </div>
          </div>

          {/* Right: device card */}
          <div className=\"lg:col-span-5 animate-fade-up\" style={{ animationDelay: \"120ms\" }}>
            <div
              className=\"relative glass rounded-3xl p-7 overflow-hidden\"
              data-testid=\"hero-device-card\"
            >
              <div className=\"absolute -top-24 -right-20 w-72 h-72 bg-orange/20 rounded-full blur-3xl\" />
              <div className=\"absolute inset-0 grain pointer-events-none\" />

              <div className=\"relative\">
                <div className=\"font-mono-x text-[10px] tracking-[0.22em] uppercase text-zinc-500\">
                  Target Device
                </div>
                <div className=\"mt-2 font-display text-3xl font-semibold\">
                  {DEVICE.name}
                </div>
                <div className=\"font-mono-x text-orange text-sm mt-1\">
                  {DEVICE.codename}
                </div>

                <div className=\"mt-7 divider-orange\" />

                <ul className=\"mt-6 space-y-4 text-sm\">
                  <Spec
                    icon={<Cpu size={15} />}
                    label=\"Chipset\"
                    value={DEVICE.chipset}
                  />
                  <Spec
                    icon={<Smartphone size={15} />}
                    label=\"Architecture\"
                    value=\"ARM64 — 64-Bit Only\"
                  />
                  <Spec
                    icon={<ShieldCheck size={15} />}
                    label=\"Status\"
                    value=\"Stable ports tested by community\"
                  />
                </ul>

                <div className=\"mt-7 flex items-center gap-2 text-[11px] font-mono-x text-zinc-500\">
                  <span className=\"w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot\" />
                  All ports stable as of latest release
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Spec = ({ icon, label, value }) => (
  <li className=\"flex items-start gap-3\">
    <span className=\"mt-0.5 inline-flex w-7 h-7 rounded-md bg-white/5 border border-white/10 items-center justify-center text-orange\">
      {icon}
    </span>
    <div className=\"flex-1\">
      <div className=\"text-[11px] uppercase tracking-[0.16em] text-zinc-500 font-mono-x\">
        {label}
      </div>
      <div className=\"text-zinc-100 mt-0.5\">{value}</div>
    </div>
  </li>
);
"