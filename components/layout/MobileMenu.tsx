import { motion } from "framer-motion";
import { navLinks } from "./Nav";

export function MobileMenu({
  activeId,
  onClose,
}: {
  activeId: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="nav-mobile-panel"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {navLinks.map((link) => {
        const isActive = activeId === link.href.slice(1);
        return (
          <a
            key={link.href}
            href={link.href}
            className={isActive ? "active" : undefined}
            onClick={onClose}
          >
            {link.label}
          </a>
        );
      })}
      <a href="#contact" className="nav-cta" onClick={onClose}>
        Engage Us
      </a>
    </motion.div>
  );
}
