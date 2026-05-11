"// Hand-drawn SVG covers — no AI slop stock images, fully thematic
export const RomCover = ({ variant }) => {
  if (variant === \"xos16\") return <XosWaveCover gradient=\"teal\" />;
  if (variant === \"xos16-n60u\") return <XosWaveCover gradient=\"orange\" />;
  if (variant === \"ofox\") return <OFoxCover />;
  return <XosWaveCover gradient=\"teal\" />;
};

const XosWaveCover = ({ gradient = \"teal\" }) => {
  const stops =
    gradient === \"orange\"
      ? { a: \"#FF6B1A\", b: \"#FFB36B\", c: \"#1a0e07\" }
      : { a: \"#23C7A9\", b: \"#7AF5DC\", c: \"#062520\" };
  return (
    <svg viewBox=\"0 0 600 360\" className=\"w-full h-full block\">
      <defs>
        <linearGradient id={`g-${gradient}`} x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">
          <stop offset=\"0%\" stopColor={stops.b} />
          <stop offset=\"60%\" stopColor={stops.a} />
          <stop offset=\"100%\" stopColor={stops.c} />
        </linearGradient>
        <radialGradient id={`s-${gradient}`} cx=\"0.7\" cy=\"0.3\" r=\"0.7\">
          <stop offset=\"0%\" stopColor=\"#ffffff\" stopOpacity=\"0.55\" />
          <stop offset=\"100%\" stopColor=\"#ffffff\" stopOpacity=\"0\" />
        </radialGradient>
      </defs>
      <rect width=\"600\" height=\"360\" fill={`url(#g-${gradient})`} />
      <path
        d=\"M-40,260 C 120,160 280,360 420,220 C 520,120 600,180 640,160 L 640,360 L -40,360 Z\"
        fill=\"rgba(255,255,255,0.18)\"
      />
      <path
        d=\"M-40,310 C 140,220 260,360 440,260 C 540,200 600,260 640,240 L 640,360 L -40,360 Z\"
        fill=\"rgba(0,0,0,0.25)\"
      />
      <rect width=\"600\" height=\"360\" fill={`url(#s-${gradient})`} />
      <g
        fontFamily=\"Unbounded, system-ui, sans-serif\"
        fontWeight=\"700\"
        fill=\"#ffffff\"
      >
        <text x=\"300\" y=\"170\" fontSize=\"140\" textAnchor=\"middle\" opacity=\"0.95\">
          16
        </text>
        <text
          x=\"300\"
          y=\"230\"
          fontSize=\"42\"
          textAnchor=\"middle\"
          letterSpacing=\"6\"
          opacity=\"0.95\"
        >
          XOS
        </text>
      </g>
    </svg>
  );
};

const OFoxCover = () => (
  <svg viewBox=\"0 0 600 360\" className=\"w-full h-full block\">
    <defs>
      <linearGradient id=\"ofox-bg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">
        <stop offset=\"0%\" stopColor=\"#1a0a02\" />
        <stop offset=\"60%\" stopColor=\"#4d1c05\" />
        <stop offset=\"100%\" stopColor=\"#0a0402\" />
      </linearGradient>
      <linearGradient id=\"ofox-fox\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">
        <stop offset=\"0%\" stopColor=\"#FFB36B\" />
        <stop offset=\"100%\" stopColor=\"#FF6B1A\" />
      </linearGradient>
    </defs>
    <rect width=\"600\" height=\"360\" fill=\"url(#ofox-bg)\" />
    {/* Grid lines */}
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1={i * 50}
        y1=\"0\"
        x2={i * 50}
        y2=\"360\"
        stroke=\"#FF6B1A\"
        strokeOpacity=\"0.06\"
      />
    ))}
    {/* Fox silhouette */}
    <g transform=\"translate(300 165)\">
      <path
        d=\"M -70 -50 L -40 -90 L -20 -55 L 20 -55 L 40 -90 L 70 -50 L 60 30 C 40 70 -40 70 -60 30 Z\"
        fill=\"url(#ofox-fox)\"
      />
      <circle cx=\"-22\" cy=\"-15\" r=\"6\" fill=\"#0a0402\" />
      <circle cx=\"22\" cy=\"-15\" r=\"6\" fill=\"#0a0402\" />
      <path
        d=\"M -6 8 L 0 18 L 6 8 Z\"
        fill=\"#0a0402\"
      />
    </g>
    <g
      fontFamily=\"JetBrains Mono, monospace\"
      fontSize=\"22\"
      fill=\"#FFB36B\"
      letterSpacing=\"4\"
    >
      <text x=\"300\" y=\"280\" textAnchor=\"middle\">
        ORANGEFOX · R11.3
      </text>
    </g>
    <text
      x=\"300\"
      y=\"310\"
      textAnchor=\"middle\"
      fontFamily=\"JetBrains Mono, monospace\"
      fontSize=\"11\"
      fill=\"#FF6B1A\"
      letterSpacing=\"3\"
      opacity=\"0.7\"
    >
      RECOVERY · X6871
    </text>
  </svg>
);
"