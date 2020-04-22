interface SkeletonProps {
    rows?: number
    circle?: boolean
    color?: string
    translucent?: boolean
    height?: string | number
    width?: string | number
}

export declare class Skeleton<SkeletonProps> {
    props: SkeletonProps
}