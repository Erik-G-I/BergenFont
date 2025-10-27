import Image from "next/image"

interface PosterGridProps{
    images: string[];
    fonts: string[];
    columns?: number;
    gap?: string;
}

export default function PosterGrid({images, fonts, columns=3, gap="1rem"}:PosterGridProps) {
    return(
        <div className="poster-grid"
        style={{
            columnCount:columns,
            columnGap:gap,
        }}>
            {images.map((src, i) => (
                <div key={i} className="grid-item" style={{breakInside: "avoid", marginBottom: gap}}>
                    <Image
                        src={src}
                        alt={`image-${i}`}
                        width={400}
                        height={400}
                        style={{width:"100%", height:"auto", borderRadius:"8px"}}
                        loading="lazy"
                    />
                    <a href={`/fonts/${fonts[i]}`} download>
                        Last ned font
                    </a>
                </div>
            ))}
        </div>
    );
}