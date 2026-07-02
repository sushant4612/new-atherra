"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Value {
  num: string;
  name: string;
  body: string;
}

export function ValueCards({ values }: { values: Value[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="values-showcase">
      {values.map((v, i) => {
        const isActive = i === active;
        return (
          <motion.button
            key={v.num}
            type="button"
            className={`value-card${isActive ? " active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-expanded={isActive}
            animate={{ flexGrow: isActive ? 2.6 : 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="value-card-top">
              <span className="value-card-num">— {v.num}</span>
              <div className="value-card-name">{v.name}</div>
            </div>
            <AnimatePresence>
              {isActive && (
                <motion.p
                  className="value-card-body"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  {v.body}
                </motion.p>
              )}
            </AnimatePresence>
            {!isActive && (
              <span className="value-card-arrow" aria-hidden="true">
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
