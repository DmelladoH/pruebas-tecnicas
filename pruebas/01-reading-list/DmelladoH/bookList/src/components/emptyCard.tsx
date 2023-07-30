export function EmptyCard({title}: {title: string}) {
    return (
        <article className={"h-[320px] relative w-[213px] card grid min-w-fit min-h-fit justify-items-center bg-slate-800 rounded-sm overflow-hidden "}>
            <p>{title}</p>
        </article>
    )
}