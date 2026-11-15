import { redirect } from "next/navigation";

// Contact lives on the home page now; keep the old URL working.
export default function ContactPage() {
  redirect("/#contact");
}
