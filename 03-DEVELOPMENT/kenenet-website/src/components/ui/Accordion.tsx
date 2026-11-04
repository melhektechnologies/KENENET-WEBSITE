import React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <details
          key={item.id}
          className="group py-2 transition-colors"
        >
          <summary className="w-full py-4 text-left list-none flex items-center justify-between gap-4 font-serif text-[19px] sm:text-[22px] text-ink hover:text-purple transition-colors focus-visible:outline-2 focus-visible:outline-purple rounded select-none cursor-pointer [&::-webkit-details-marker]:hidden">
            <span>{item.title}</span>
            <span
              className="flex-shrink-0 w-8 h-8 rounded-full bg-mist border border-line flex items-center justify-center text-purple transition-transform duration-200 group-open:rotate-45 group-hover:bg-purple-100"
              aria-hidden="true"
            >
              <Plus className="w-4 h-4 stroke-[2]" />
            </span>
          </summary>
          <div className="pb-5 pt-1">
            <p className="font-sans text-[16px] sm:text-[17px] text-ink-600 leading-relaxed max-w-2xl">
              {item.content}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
};
