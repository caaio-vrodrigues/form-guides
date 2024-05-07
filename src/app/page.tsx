'use client';

import { BasicForm } from "@/components/BasicForm";
import { ZodForm1 } from "@/components/zod-form/ZodForm1";
import { ZodForm2 } from "@/components/zod-form/ZodForm2";
import { ZodForm3 } from "@/components/zod-form/ZodForm3";

export default function Home() {
  return (
    <main>
      {/* <BasicForm/> */}
      {/* <ZodForm1/> */}
      {/* <ZodForm2/> */}
      <ZodForm3/>
    </main>
  );
};
