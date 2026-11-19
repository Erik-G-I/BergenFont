import Link from "next/link";
import Image from "next/image";

export default function LogoButton() {
    return (
        <div>
            <Link href="/kart" className="grid grid-cols-1 h-full place-content-evenly transition hover:opacity-80">
                <Image
                    src="/BergenFontSign.svg"
                    width={1246}
                    height={536}
                    alt="Bergen Font Logo"
                    loading="eager"
                />
            </Link>
        </div>
    );
}