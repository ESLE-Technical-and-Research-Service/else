import {JSX} from "react";

type HeroImageTitleProps = {
    title: string;
}

export default function HeroImageTitle({ title }: HeroImageTitleProps): JSX.Element {
    return (
        <h1
            data-testid="hero-image-title"
            className="text-2xl sm:text-3xl md:text-6xl font-bold drop-shadow-2xl leading-tight"
        >
            {title}
        </h1>
    );
}