import React from 'react'

interface imageData {
    id: string,
    urls: {
        full: string,
    }
}
interface Props {
    myImages: imageData[]
}
const ImageResults: React.FC<Props> = ({ myImages }) => {
    return (
        <div className="px-6 my-10 sm:grid md:grid-cols-4 xl:grid-cols-8 3xl:flex flex-wrap justify-center">
            {myImages.length !== 0 && myImages.map(el =>
                <div key={el.id} className="object-cover p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
                    <input className="" type="checkbox" />
                    <img src={el.urls.full} className="h-48 w-full object-cover md:h-48 md:w-48" />
                </div>)}
        </div>
    )
}

export default ImageResults