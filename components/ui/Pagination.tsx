"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

type PaginationProps = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export function Pagination({ current, total, onPrev, onNext }: PaginationProps) {
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="pagination">
      <span className="pagination-count">
        {pad(current)} / {pad(total)}
      </span>
      <div className="pagination-controls">
        <button
          type="button"
          className="pagination-btn"
          onClick={onPrev}
          aria-label="Previous"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          className="pagination-btn"
          onClick={onNext}
          aria-label="Next"
        >
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
