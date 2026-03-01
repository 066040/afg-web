import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Ahmet Furkan Göktaş",
    description:
        "Get in touch for collaboration, internships, or project ideas. Email, GitHub, and LinkedIn.",
    alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}