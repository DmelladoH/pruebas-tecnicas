export function GridDisplay({children}: {children: React.ReactNode}){
    return(
        <section >
            <ul style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: "10px"}}>
                {children}
            </ul>
        </section>
    )
}
