import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";
import { useState } from "react";
import { MapPin } from "lucide-react";

type HoverCardItem = {
  title: string;
  description: string | ReactNode;
  link: string;
  logo?: string;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverCardItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Top Ranking Ribbon */}
          {idx === 0 && (
            <div className="absolute top-2 left-2 z-50 rounded px-2 py-1 text-xs font-bold bg-yellow-400 text-black shadow">
              🥇 Top 1
            </div>
          )}
          {idx === 1 && (
            <div className="absolute top-2 left-2 z-50 rounded px-2 py-1 text-xs font-bold bg-gray-300 text-black shadow">
              🥈 Top 2
            </div>
          )}
          {idx === 2 && (
            <div className="absolute top-2 left-2 z-50 rounded px-2 py-1 text-xs font-bold bg-amber-700 text-white shadow">
              🥉 Top 3
            </div>
          )}

          <Card>
            <div className="flex items-center gap-4">
              {/* Left: Title & Description */}
              <div className="w-[70%]">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {item.description}
                  </div>
                </CardDescription>
              </div>

              {/* Right: Logo or Placeholder */}
              <div className="w-[30%] flex items-center justify-end">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-16 object-contain"
                  />
                ) : (
                  <div className="text-4xl animate-spin">🌀</div>
                )}
              </div>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </div>
  );
};
