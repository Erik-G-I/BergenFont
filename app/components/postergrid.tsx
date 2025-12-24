import Image from "next/image";
import Link from "next/link";

interface PosterGridProps {
    images: string[];
    fonts?: string[];
    socials?: string[];
    columns?: number;
    gap?: string;
}

export default function PosterGrid({
    images,
    fonts = [],
    socials = [],
    columns = 3,
    gap = "1rem",
}: PosterGridProps) {
    return (
        <div
            className="poster-grid"
            style={{
                columnCount: columns,
                columnGap: gap,
            }}
        >
            {images.map((src, i) => {
                const hasSocial = Boolean(socials[i]);
                const hasFont = Boolean(fonts[i]);

                const imageElement = (
                    <Image
                        src={src}
                        alt={`image-${i}`}
                        width={400}
                        height={400}
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px",
                        }}
                        loading="lazy"
                    />
                );

                return (
                    <div
                        key={i}
                        className="grid-item"
                        style={{ breakInside: "avoid", marginBottom: gap }}
                    >
                        {hasSocial ? (
                            <Link href={`https://${socials[i]}`}>
                                {imageElement}
                            </Link>
                        ) : (
                            imageElement
                        )}

                        {hasFont && (
                            <a
                                className="link"
                                href={`/fonts/${fonts[i]}`}
                                download
                            >
                                Last ned font
                            </a>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
