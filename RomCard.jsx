"import { ArrowUpRight, Download, Cpu } from \"lucide-react\";
import { RomCover } from \"./RomCover\";

export const RomCard = ({ rom, onOpen, index = 0 }) => {
  return (
    <article
      className=\"group relative glass rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-2px] hover-glow animate-fade-up\"
      style={{ animationDelay: `${index * 80}ms` }}
      data-testid={`rom-card-${rom.id}`}
    >
      {/* Cover */}
      <div className=\"relative aspect-[16/9] overflow-hidden\">
        <RomCover variant={rom.cover} />
        <div className=\"absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent\" />

        <div className=\"absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 h-6 rounded-full bg-black/60 backdrop-blur border border-white/10 font-mono-x text-[10px] uppercase tracking-[0.15em] text-zinc-200\">
          <span className=\"w-1.5 h-1.5 rounded-full bg-emerald-400\" />
          {rom.status}
        </div>

        <div className=\"absolute top-3 right-3 inline-flex items-center px-2.5 h-6 rounded-full bg-orange text-black font-mono-x text-[10px] uppercase tracking-[0.18em] font-semibold\">
          {rom.type}
        </div>
      </div>

      {/* Body */}
      <div className=\"p-5\">
        <div className=\"flex items-start justify-between gap-3\">
          <div>
            <h3
              className=\"font-display text-xl font-semibold tracking-tight\"
              data-testid={`rom-title-${rom.id}`}
            >
              {rom.title}
            </h3>
            <p className=\"text-zinc-400 text-sm mt-1\">{rom.subtitle}</p>
          </div>
          <button
            onClick={() => onOpen(rom)}
            className=\"shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-orange hover:text-black hover:border-orange transition-all\"
            aria-label={`Open ${rom.title} details`}
            data-testid={`rom-details-btn-${rom.id}`}
          >
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Meta row */}
        <div className=\"mt-5 grid grid-cols-2 gap-3\">
          <Meta label=\"Android Base\" value={rom.androidBase} />
          <Meta label=\"Version\" value={rom.version} mono />
        </div>

        <div className=\"mt-5 flex items-center gap-2 text-xs text-zinc-500 font-mono-x\">
          <Cpu size={12} className=\"text-orange\" />
          <span>{rom.bit}</span>
          <span className=\"text-zinc-700\">·</span>
          <span>Ported by {rom.porter}</span>
        </div>

        {/* Download */}
        <a
          href={rom.downloadUrl}
          target=\"_blank\"
          rel=\"noreferrer\"
          className=\"mt-5 group/btn inline-flex w-full items-center justify-between gap-2 h-11 px-4 rounded-xl bg-orange text-black font-medium text-sm hover:opacity-90 transition-all\"
          data-testid={`rom-download-${rom.id}`}
        >
          <span className=\"inline-flex items-center gap-2\">
            <Download size={15} />
            Download {rom.type === \"RECOVERY\" ? \"Recovery\" : \"ROM\"}
          </span>
          <span className=\"font-mono-x text-[11px] opacity-70 group-hover/btn:opacity-100\">
            .{rom.type === \"RECOVERY\" ? \"img\" : \"zip\"}
          </span>
        </a>
      </div>
    </article>
  );
};

const Meta = ({ label, value, mono }) => (
  <div className=\"rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2\">
    <div className=\"text-[10px] uppercase tracking-[0.15em] text-zinc-500 font-mono-x\">
      {label}
    </div>
    <div
      className={`mt-1 text-sm text-zinc-100 ${mono ? \"font-mono-x\" : \"\"}`}
    >
      {value}
    </div>
  </div>
);
"