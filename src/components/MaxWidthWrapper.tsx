import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        <div
            className={cn(
                'mx-auto w-full lg:container px-6 lg:px-4 relative',
                className
            )}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper