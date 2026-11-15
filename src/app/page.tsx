import HomeView from "@/components/HomeView";
import { homeMeta } from "@/lib/meta";

export const metadata = homeMeta("en");

export default function Page() {
  return <HomeView lang="en" />;
}
