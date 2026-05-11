// ROM catalog for Infinix GT 20 Pro (X6871)
// Ported by Mehrnn — site by Kashan Ahmad

export const DEVICE = {
  name: "Infinix GT 20 Pro",
  codename: "X6871",
  chipset: "MediaTek Dimensity 8200 Ultimate",
};

export const ROMS = [
  {
    id: "xos-16-1-v2-n50s",
    title: "XOS 16.1 v2",
    subtitle: "Ported from Infinix Note 50s",
    androidBase: "Android 16",
    version: "v2 — Stable",
    type: "ROM",
    status: "stable",
    accent: "#FF6B1A",
    cover: "xos16",
    porter: "Mehrnn",
    base: "Any A15 Vendor",
    bit: "64-Bit Only",
    description:
      "XOS 16.1 v2 for GT 20 Pro — a stable Android 16 based port from the Infinix Note 50s. Do not compare with stock. Can dirty flash from old 50s port.",
    downloadUrl:
      "https://drive.google.com/file/d/1JdifWk1U-Tqw83Pb0PbUPvFqJSJLoO5e/view?usp=sharing",
    fileName: "XOS16.1-v2-X6871-Mehrnn.zip",
    changelogs: ["Fixed device uncertified", "Stable release v2"],
    knownBugs: [
      {
        text: "Bypass Charging",
        fixUrl: "https://t.me/xos16x6871portlinks/23",
      },
    ],
    requirements: [
      {
        text: "Vbmeta Disabler",
        url: "https://t.me/infinixgt20proid/14628",
      },
      { text: "Working Brain", url: null },
    ],
    flashingSteps: [
      "Reboot to Recovery (TWRP / OrangeFox)",
      "Flash Vbmeta Disabler",
      "Flash ROM.zip",
      "Format Data",
      "Reboot System",
    ],
    credits: [
      "Allah (S.W.T)",
      "@satyam_rai1",
      "@ramabondanp",
      "Testers and Contributions",
    ],
  },
  {
    id: "xos-16-2-n60u",
    title: "XOS 16.2.0",
    subtitle: "Ported from Infinix Note 60 Ultra",
    androidBase: "Android 16",
    version: "v2 — Stable",
    type: "ROM",
    status: "stable",
    accent: "#22D3A5",
    cover: "xos16-n60u",
    porter: "Mehrnn",
    base: "FW 15.1.2.145-165",
    bit: "64-Bit Only",
    description:
      "XOS 16.2.0 for GT 20 Pro — stable Note 60 Ultra port. Polished build with minor bug fixes over previous releases.",
    downloadUrl:
      "https://drive.google.com/file/d/1tSSry1rRWioJZi-c9Dg6k1zYBie5qql_/view?usp=drive_link",
    fileName: "XOS16.2-N60U-X6871-Mehrnn.zip",
    changelogs: ["Minor bug fixes"],
    knownBugs: [],
    requirements: [
      {
        text: "Vbmeta Disabler",
        url: "https://t.me/infinixgt20proid/14628",
      },
      { text: "Working Brain", url: null },
    ],
    flashingSteps: [
      "Reboot to Recovery (TWRP / OrangeFox)",
      "Flash Vbmeta Disabler",
      "Flash ROM.zip",
      "Format Data",
      "Reboot System",
    ],
    credits: [
      "Allah (S.W.T)",
      "@satyam_rai1",
      "@ramabondanp",
      "Testers and Contributions",
    ],
  },
  {
    id: "orangefox-r11-3-x6871",
    title: "OrangeFox R11.3",
    subtitle: "Unofficial Recovery (OTG fix)",
    androidBase: "Recovery",
    version: "15.1.2 — Unofficial",
    type: "RECOVERY",
    status: "stable",
    accent: "#FF8A3D",
    cover: "ofox",
    porter: "Community",
    base: "OrangeFox R11.3 Base",
    bit: "ARM64",
    description:
      "OrangeFox Recovery R11.3 for GT 20 Pro with OTG fix. Required for flashing ROMs, Vbmeta Disabler and other zips on the X6871.",
    downloadUrl:
      "https://drive.google.com/file/d/1JdifWk1U-Tqw83Pb0PbUPvFqJSJLoO5e/view?usp=sharing",
    fileName: "OrangeFox-R11.3_OTGfix_15.1.2-Unofficial-X6871.img",
    changelogs: ["OTG fix", "Built for X6871 (GT 20 Pro)"],
    knownBugs: [],
    requirements: [
      { text: "Unlocked Bootloader", url: null },
      { text: "fastboot / adb on PC", url: null },
    ],
    flashingSteps: [
      "Reboot phone into fastboot mode",
      "Run: fastboot flash recovery OrangeFox-R11.3_OTGfix_15.1.2-Unofficial-X6871.img",
      "Reboot to recovery immediately (do not boot system first)",
      "Wipe Dalvik / Cache if needed",
      "Proceed with ROM / Vbmeta flashing",
    ],
    credits: ["OrangeFox Team", "@satyam_rai1", "Community testers"],
  },
];
