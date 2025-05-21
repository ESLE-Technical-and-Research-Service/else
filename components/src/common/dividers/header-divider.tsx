import AnimatedDivider from "./animated-divider";

type HeaderDividerProps = {
    title: string;
    isVisible?: boolean;
}

export default function HeaderDivider({title, isVisible}: HeaderDividerProps) {
    return (
        <>
            <h1
                data-testid="header-title"
                className={`
                text-4xl font-extrabold text-center text-[var(--font-color)] mt-6
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
                <div>
                    {title}
                </div>
                <AnimatedDivider delay={1} width={150}/>
            </h1>
        </>
    );
}