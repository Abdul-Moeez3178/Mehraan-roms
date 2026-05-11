"import { Flame, Send } from \"lucide-react\";

export const Footer = () => {
  return (
    <footer
      id=\"credits\"
      className=\"relative border-t border-white/5 mt-12\"
      data-testid=\"site-footer\"
    >
      <div className=\"max-w-7xl mx-auto px-5 lg:px-10 py-14\">
        <div className=\"grid md:grid-cols-3 gap-10\">
          <div>
            <div className=\"flex items-center gap-2.5\">
              <span className=\"inline-flex items-center justify-center w-9 h-9 rounded-lg bg-orange text-black\">
                <Flame size={18} strokeWidth={2.4} />
              </span>
              <div className=\"font-display text-lg font-semibold tracking-tight\">
                GT20PRO<span className=\"text-orange\">.ports</span>
              </div>
            </div>
            <p className=\"mt-4 text-sm text-zinc-400 leading-relaxed max-w-sm\">
              An unofficial, community-run directory for Infinix GT 20 Pro (X6871)
              custom ROMs &amp; recoveries.
            </p>
          </div>

          <div>
            <div className=\"font-mono-x text-[10px] tracking-[0.22em] uppercase text-zinc-500\">
              Credits
            </div>
            <ul className=\"mt-4 space-y-2.5 text-sm text-zinc-300\">
              <li>
                <span className=\"text-zinc-500\">ROMs ported by</span>{\" \"}
                <span className=\"text-orange font-medium\">Mehrnn</span>
              </li>
              <li>
                <span className=\"text-zinc-500\">Website made by</span>{\" \"}
                <span className=\"text-orange font-medium\">Kashan Ahmad</span>
              </li>
              <li>
                <span className=\"text-zinc-500\">Thanks to</span>{\" \"}
                <span className=\"text-zinc-200\">
                  @satyam_rai1, @ramabondanp &amp; testers
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className=\"font-mono-x text-[10px] tracking-[0.22em] uppercase text-zinc-500\">
              Community
            </div>
            <div className=\"mt-4 flex flex-col gap-2.5\">
              <a
                href=\"https://t.me/infinixgt20proid\"
                target=\"_blank\"
                rel=\"noreferrer\"
                className=\"inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-orange transition-colors\"
                data-testid=\"footer-tg-group\"
              >
                <Send size={14} /> GT 20 Pro Telegram Group
              </a>
              <a
                href=\"https://t.me/xos16x6871portlinks/23\"
                target=\"_blank\"
                rel=\"noreferrer\"
                className=\"inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-orange transition-colors\"
                data-testid=\"footer-tg-links\"
              >
                <Send size={14} /> XOS Port Links Channel
              </a>
            </div>
          </div>
        </div>

        <div className=\"mt-12 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3\">
          <div className=\"font-mono-x text-[11px] tracking-[0.16em] uppercase text-zinc-500\">
            © {new Date().getFullYear()} GT20PRO.ports · Unofficial
          </div>
          <div className=\"font-mono-x text-[11px] tracking-[0.16em] uppercase text-zinc-500\">
            Built with <span className=\"text-orange\">♦</span> by{\" \"}
            <span className=\"text-zinc-200\">Kashan Ahmad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
"