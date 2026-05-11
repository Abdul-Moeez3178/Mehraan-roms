"import { Flame, Github } from \"lucide-react\";

export const Header = () => {
  return (
    <header
      className=\"sticky top-0 z-40 backdrop-blur-xl bg-[#0a0a0b]/70 border-b border-white/5\"
      data-testid=\"site-header\"
    >
      <div className=\"max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between\">
        <a
          href=\"#top\"
          className=\"flex items-center gap-2.5 group\"
          data-testid=\"header-logo\"
        >
          <span className=\"relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-orange text-black\">
            <Flame size={18} strokeWidth={2.4} />
            <span className=\"absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 pulse-dot\" />
          </span>
          <div className=\"leading-tight\">
            <div className=\"font-display text-[15px] font-semibold tracking-tight\">
              GT20PRO<span className=\"text-orange\">.ports</span>
            </div>
            <div className=\"font-mono-x text-[10px] uppercase tracking-[0.18em] text-zinc-500\">
              Custom ROMs · Infinix X6871
            </div>
          </div>
        </a>

        <nav className=\"hidden md:flex items-center gap-7 text-sm text-zinc-400\">
          <a
            href=\"#roms\"
            className=\"hover:text-white transition-colors\"
            data-testid=\"nav-roms\"
          >
            ROMs
          </a>
          <a
            href=\"#recovery\"
            className=\"hover:text-white transition-colors\"
            data-testid=\"nav-recovery\"
          >
            Recovery
          </a>
          <a
            href=\"#guide\"
            className=\"hover:text-white transition-colors\"
            data-testid=\"nav-guide\"
          >
            Guide
          </a>
          <a
            href=\"#credits\"
            className=\"hover:text-white transition-colors\"
            data-testid=\"nav-credits\"
          >
            Credits
          </a>
        </nav>

        <a
          href=\"https://t.me/infinixgt20proid\"
          target=\"_blank\"
          rel=\"noreferrer\"
          className=\"inline-flex items-center gap-2 px-4 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-all\"
          data-testid=\"header-telegram\"
        >
          <Github size={15} className=\"opacity-70\" />
          <span className=\"hidden sm:inline\">GT20Pro Group</span>
          <span className=\"sm:hidden\">TG</span>
        </a>
      </div>
    </header>
  );
};
"