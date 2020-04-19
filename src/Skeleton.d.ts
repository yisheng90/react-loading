interface SkeletonProps {
    rows?: number
    circle?: boolean
    color?: string
    translucent?: boolean
    height?: stting | number
    width?: stting | number
}

export declare class Skeleton<SkeletonProps> {
    props: SkeletonProps
}