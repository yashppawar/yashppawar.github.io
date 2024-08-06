import Image from "next/image";
import type { StaticImport, PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { cn } from "@/lib/utils";

type ThemedStaticImportProps = {
    srcLight: StaticImport
    srcDark: StaticImport
    alt: string
    placeholder?: PlaceholderValue
    className?: string 
    imgClassName?: string 
}

function ThemedStaticImage(props : ThemedStaticImportProps) {
    const {
        srcLight, srcDark, alt, className, placeholder, imgClassName
    } = props

    return (
        <div className={cn('relative', className)}>
            <Image
                className={cn("dark:hidden", imgClassName)}
                src={srcLight}
                alt={alt}
                placeholder={placeholder}
            />
            <Image
                className={cn("hidden dark:block", imgClassName)}
                src={srcDark}
                alt={alt}
                placeholder={placeholder}
            />
        </div>
    )
}

export default ThemedStaticImage;
