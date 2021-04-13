function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = dynamicDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}