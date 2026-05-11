"import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from \"../components/ui/dialog\";
import {
  Download,
  AlertTriangle,
  Wrench,
  ListChecks,
  ExternalLink,
  Heart,
} from \"lucide-react\";
import { RomCover } from \"./RomCover\";

export const RomDetailDialog = ({ rom, open, onOpenChange }) => {
  if (!rom) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className=\"max-w-3xl bg-[#0e0e10] border border-white/10 p-0 overflow-hidden\"
        data-testid=\"rom-detail-dialog\"
      >
        {/* Cover */}
        <div className=\"relative h-44 overflow-hidden\">
          <RomCover variant={rom.cover} />
          <div className=\"absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/40 to-transparent\" />
          <div className=\"absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 h-6 rounded-full bg-orange text-black font-mono-x text-[10px] uppercase tracking-[0.18em] font-semibold\">
            {rom.type}
          </div>
        </div>

        <div className=\"px-7 pb-7 pt-3\">
          <DialogHeader>
            <DialogTitle
              className=\"font-display text-2xl sm:text-3xl text-white tracking-tight\"
              data-testid=\"dialog-title\"
            >
              {rom.title}{\" \"}
              <span className=\"text-orange font-mono-x text-base\">
                · {rom.version}
              </span>
            </DialogTitle>
            <p className=\"text-zinc-400 text-sm mt-1\">
              {rom.subtitle} · Ported by{\" \"}
              <span className=\"text-orange\">{rom.porter}</span> ·{\" \"}
              <span className=\"font-mono-x text-zinc-300\">{rom.bit}</span>
            </p>
          </DialogHeader>

          {/* Meta strip */}
          <div className=\"mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5\">
            <MetaPill label=\"Base\" value={rom.base} />
            <MetaPill label=\"Android\" value={rom.androidBase} />
            <MetaPill label=\"Device\" value=\"X6871\" mono />
          </div>

          <p className=\"mt-5 text-zinc-300 text-sm leading-relaxed\">
            {rom.description}
          </p>

          {/* Two columns */}
          <div className=\"mt-7 grid md:grid-cols-2 gap-5\">
            <Section icon={<ListChecks size={14} />} title=\"Changelogs\">
              <ul className=\"space-y-1.5\">
                {rom.changelogs.map((c, i) => (
                  <li
                    key={i}
                    className=\"text-sm text-zinc-300 flex gap-2 items-start\"
                  >
                    <span className=\"text-orange mt-0.5\">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Section>

            {rom.knownBugs.length > 0 && (
              <Section
                icon={<AlertTriangle size={14} className=\"text-amber-400\" />}
                title=\"Known bugs\"
              >
                <ul className=\"space-y-1.5\">
                  {rom.knownBugs.map((b, i) => (
                    <li
                      key={i}
                      className=\"text-sm text-zinc-300 flex gap-2 items-start\"
                    >
                      <span className=\"text-amber-400 mt-0.5\">!</span>
                      <span>
                        {b.text}
                        {b.fixUrl && (
                          <a
                            href={b.fixUrl}
                            target=\"_blank\"
                            rel=\"noreferrer\"
                            className=\"ml-1.5 text-orange underline-offset-4 hover:underline inline-flex items-center gap-0.5\"
                          >
                            fix here <ExternalLink size={11} />
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            <Section icon={<Wrench size={14} />} title=\"Required things\">
              <ul className=\"space-y-1.5\">
                {rom.requirements.map((r, i) => (
                  <li
                    key={i}
                    className=\"text-sm text-zinc-300 flex gap-2 items-start\"
                  >
                    <span className=\"text-orange mt-0.5\">•</span>
                    {r.url ? (
                      <a
                        href={r.url}
                        target=\"_blank\"
                        rel=\"noreferrer\"
                        className=\"hover:text-orange transition-colors inline-flex items-center gap-1\"
                      >
                        {r.text}
                        <ExternalLink size={11} className=\"opacity-70\" />
                      </a>
                    ) : (
                      r.text
                    )}
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={<ListChecks size={14} />} title=\"Flashing process\">
              <ol className=\"space-y-1.5\">
                {rom.flashingSteps.map((s, i) => (
                  <li
                    key={i}
                    className=\"text-sm text-zinc-300 flex gap-2.5 items-start\"
                  >
                    <span className=\"shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-md bg-orange/15 text-orange font-mono-x text-[10px] font-semibold\">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </Section>
          </div>

          {/* Credits */}
          <div className=\"mt-7 pt-5 border-t border-white/5\">
            <div className=\"flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-mono-x\">
              <Heart size={12} className=\"text-orange\" />
              Credits
            </div>
            <div className=\"mt-2 flex flex-wrap gap-2\">
              {rom.credits.map((c, i) => (
                <span
                  key={i}
                  className=\"px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/5 text-xs text-zinc-300\"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={rom.downloadUrl}
            target=\"_blank\"
            rel=\"noreferrer\"
            className=\"mt-6 inline-flex w-full items-center justify-center gap-2 h-12 rounded-xl bg-orange text-black font-medium text-[15px] hover:opacity-90 hover-glow transition-all\"
            data-testid=\"dialog-download-btn\"
          >
            <Download size={16} />
            Download — {rom.fileName}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const MetaPill = ({ label, value, mono }) => (
  <div className=\"rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2\">
    <div className=\"text-[10px] uppercase tracking-[0.15em] text-zinc-500 font-mono-x\">
      {label}
    </div>
    <div className={`mt-0.5 text-sm text-zinc-100 ${mono ? \"font-mono-x\" : \"\"}`}>
      {value}
    </div>
  </div>
);

const Section = ({ icon, title, children }) => (
  <div className=\"glass rounded-xl p-4\">
    <div className=\"flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-400 font-mono-x\">
      <span className=\"text-orange\">{icon}</span>
      {title}
    </div>
    <div className=\"mt-3\">{children}</div>
  </div>
);
"