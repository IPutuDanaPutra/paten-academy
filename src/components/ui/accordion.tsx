"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className = "",
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={`border-b border-ink/10 last:border-0 ${className}`}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className = "",
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={`group flex flex-1 items-center justify-between py-5 text-left font-serif italic text-lg hover:text-primary transition-colors ${className}`}
        {...props}
      >
        {children}
        <ChevronDown
          size={18}
          className="shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className = "",
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=open]:animate-[accordion-down_0.2s_ease-out] data-[state=closed]:animate-[accordion-up_0.2s_ease-out]"
      {...props}
    >
      <div className={`pb-5 text-muted font-label text-sm leading-relaxed ${className}`}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}
