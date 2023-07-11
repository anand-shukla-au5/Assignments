import Thumbnail from "./Thumbnail"
function Result({ results }) {
    return (
        <>
            {results.length !== 0 ?
                <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                    {results?.map(el =>
                        <Thumbnail key={el.id} results={el} />
                    )}
                </div>
                : <div className="flex items-center justify-center mt-40">
                    <h1 className="text-2xl font-semibold">Search to get Movies of an Actor</h1>
                </div>}
        </>
    )
}

export default Result