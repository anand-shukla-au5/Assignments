import React, { useEffect } from 'react'
import ImageResults from './ImageResults';
import { getphotos } from '../Api/apis';
import { useSelector, useDispatch } from 'react-redux'
import { defaultImages } from '../Redux/imageSlicer'

const FilterImage: React.FC = () => {
    const imageGallery = useSelector((state: { gallery: { arrGallery: [] } }) => state.gallery)
    const dispatch = useDispatch();
    useEffect(() => {
        getphotos().then(res => {
            console.log(res.data)
            dispatch(defaultImages(res.data))
        })
    }, [dispatch]);
    console.log('from selectors', imageGallery.arrGallery)
    return (
        <>
            <div className="border border-gray-300 mx-5  text-slate-600 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between h-auto">
                    <div className="border-r-2 border-r-gray-300 p-6 pt-8">
                        <input type="checkbox" />
                        <label className="ml-2">Select all</label>
                    </div>
                    <div className="p-6">
                        <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                {/* <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg> */}
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for image..." type="text" name="search" />
                        </label>
                    </div>
                </div>
                <div className="flex border border-t-1 border-gray-300 border-b-0 border-x-0">
                    <div className="border-r-2 border-r-gray-300 p-4">Sort by</div>
                    <div className="p-4">
                        {['Title', 'Date', 'Size'].map(el =>
                            <span className="border border-gray-300 py-1 px-3 mx-2">{el}</span>
                        )}
                    </div>
                </div>
            </div>
            <ImageResults myImages={imageGallery.arrGallery} />
        </>
    );
}

export default FilterImage;