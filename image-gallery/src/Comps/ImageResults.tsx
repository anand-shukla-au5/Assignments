import React from 'react'
export interface imageData {
    id: string,
    width: number,
    height: number,
    created_at: Date,
    urls: {
        full: string,
    },
    user: {
        name: string,
    }
}
interface Props {
    myImages: imageData[],
    checkedValues: imageData[] | [],
}
const ImageResults: React.FC<Props> = ({ myImages, checkedValues }) => {
    console.log(checkedValues.length)
    return (
        <div className="px-6 my-10 sm:grid md:grid-cols-3 xl:grid-cols-6 3xl:flex flex-wrap justify-center">
            {myImages.length !== 0 && checkedValues && myImages.map((el, index) => {
                console.log(checkedValues[index],el.id)
                return (<div key={el.id} className="relative object-cover p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
                    <input checked={checkedValues.length !== 0 ? checkedValues[index].id === el.id : false} className="absolute h-3.5 w-3.5 left-[2px] top-[0px]" type="checkbox" />
                    <img alt={el.user.name} src={el.urls.full} className="rounded-sm h-48 w-full object-cover md:h-48 md:w-55 sm:w-screen" />
                    {el.user.name}
                </div>)
            }
            )}
        </div>
    )
}

export default ImageResults