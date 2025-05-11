import {motion} from "framer-motion";

type AnimatedDividerProps = {
    delay: number
    width?: number
    once?: boolean
}

export default function AnimatedDivider({delay = 1, width = 100, once = true}: AnimatedDividerProps) {
    return (
        <motion.span
            initial={{ width: 0, height: "4px" }}
            whileInView={{ width: `${width}px`, height: "4px" }}
            transition={{ duration: 1.5, delay: delay * 0.35, ease: "easeOut" }}
            viewport={{ once: once, amount: 1 }}
            className="inline-block w-10 h-1 bg-[var(--font-color-accent)] rounded transition-all group-hover:w-16 ease-linear mb-3"
        >
        </motion.span>
    )
}