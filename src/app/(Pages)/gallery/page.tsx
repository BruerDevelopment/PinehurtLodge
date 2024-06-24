import { Metadata } from "next";
import { ClientContent } from "./client";
import { BuildPageMeta } from "@/app/metaDefaults";

export const metadata: Metadata = BuildPageMeta({
  title:"Photo Gallery"
})

export default function Home() {
  return (
      <ClientContent />
  );
}


