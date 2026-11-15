import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Ahmet Furkan Göktaş — Gömülü Sistemler & Otomotiv Yazılımı",
    template: "%s — Ahmet Furkan Göktaş",
  },
};

// Single root layout serves both languages; mark Turkish pages before paint.
export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='tr'" }} />
      {children}
    </>
  );
}
