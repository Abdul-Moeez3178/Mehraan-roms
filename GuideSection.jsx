"import { ShieldAlert, Terminal, RefreshCw, Trash2, Power } from \"lucide-react\";

const steps = [
  {
    icon: <RefreshCw size={16} />,
    title: \"Reboot to Recovery\",
    desc: \"Boot into TWRP or OrangeFox recovery using volume keys + power.\",
  },
  {
    icon: <Terminal size={16} />,
    title: \"Flash Vbmeta Disabler\",
    desc: \"Required before flashing any custom ROM on X6871.\",
  },
  {
    icon: <Terminal size={16} />,
    title: \"Flash ROM.zip\",
    desc: \"Select the downloaded XOS ROM zip and confirm flash.\",
  },
  {
    icon: <Trash2 size={16} />,
    title: \"Format Data\",
    desc: \"Mandatory clean install — wipes /data partition.\",
  },
  {
    icon: <Power size={16} />,
    title: \"Reboot System\",
    desc: \"First boot may take 5–10 minutes. Be patient.\",
  },
];

export const GuideSection = () => {
  return (
    <section
      id=\"guide\"
      className=\"max-w-7xl mx-auto px-5 lg:px-10 py-20\"
      data-testid=\"guide-section\"
    >
      <div className=\"flex items-end justify-between flex-wrap gap-4 mb-10\">
        <div>
          <div className=\"font-mono-x text-[11px] tracking-[0.22em] uppercase text-orange\">
            03 — Process
          </div>
          <h2 className=\"font-display text-4xl sm:text-5xl font-semibold tracking-tight mt-2\">
            Flashing Guide
          </h2>
          <p className=\"text-zinc-400 mt-3 max-w-xl\">
            Generic 5-step process. ROM-specific differences are listed inside each
            ROM's detail panel.
          </p>
        </div>
        <div className=\"inline-flex items-center gap-2 px-4 h-10 rounded-full glass-orange text-sm\">
          <ShieldAlert size={14} className=\"text-orange\" />
          <span className=\"text-zinc-200\">
            Flashing voids warranty — proceed at your own risk
          </span>
        </div>
      </div>

      <div className=\"grid sm:grid-cols-2 lg:grid-cols-5 gap-4\">
        {steps.map((s, i) => (
          <div
            key={i}
            className=\"glass rounded-2xl p-5 relative overflow-hidden hover:border-orange/40 transition-colors\"
            data-testid={`guide-step-${i + 1}`}
          >
            <div className=\"absolute top-4 right-4 font-mono-x text-[10px] text-zinc-600 tracking-[0.2em]\">
              {String(i + 1).padStart(2, \"0\")}
            </div>
            <div className=\"inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange/10 text-orange border border-orange/20\">
              {s.icon}
            </div>
            <h3 className=\"mt-4 font-display text-base font-semibold\">
              {s.title}
            </h3>
            <p className=\"mt-1.5 text-sm text-zinc-400 leading-relaxed\">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
"