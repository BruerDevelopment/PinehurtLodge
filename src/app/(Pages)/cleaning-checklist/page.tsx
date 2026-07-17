import { Metadata } from "next";
import { ClientContent } from "./client";
import { BuildPageMeta } from "@/app/metaDefaults";

export const generateMetadata = BuildPageMeta({
  title: "Cleaning Checklist | Pinehurst Lodge",
  url:"/cleaning-checklist"
})

export default function Home() {
  return (
      <ClientContent />
  );
}


