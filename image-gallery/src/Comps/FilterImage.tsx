import React, { useEffect,useState } from 'react'
import ImageResults,{imageData} from './ImageResults';
import { getphotos } from '../Api/apis';
import { useSelector, useDispatch } from 'react-redux'
import { defaultImages,sortByTitle } from '../Redux/imageSlicer'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'

const mainSort = ['title', 'date', 'size']

const FilterImage: React.FC = () => {
    const imageGallery = useSelector((state: { gallery: { arrGallery: [] } }) => state.gallery);
    const [sortBy, setsortBy] = useState('');
    const [checkedArr, setcheckedArr] = useState<Array<imageData>>([])
    const dispatch = useDispatch();

    const handleselectAll = (e:any)=>{
        if(e.target.checked){
            setcheckedArr([...imageGallery.arrGallery]);
        }else{
            setcheckedArr([]);
        }
    }

    useEffect(() => {
        if(sortBy){
            dispatch(sortByTitle(sortBy))
        }    
    }, [sortBy,dispatch])
    
    
    useEffect(() => {
        if(imageGallery.arrGallery.length === 0){
            getphotos().then(res => {
                dispatch(defaultImages(res.data))
            }).then(()=>setsortBy('title'))
        }
    }, [dispatch,imageGallery.arrGallery]);
    
    console.log('from selectors', checkedArr)
    return (
        <>
            <div className="border border-gray-300 mx-5  text-slate-600 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between h-auto">
                    <div className="border-r-2 border-r-gray-300 p-6 pt-8">
                        <input className='h-4 w-4' onChange={handleselectAll} type="checkbox" />
                        <label className="ml-2">Select all</label>
                    </div>
                    <div className="p-6 flex-auto flex justify-between">
                            <AiOutlineDelete className='mt-2' size={20} />
                        <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <BsSearch/>
                            </span>
                            <input onChange={(e)=>{
                                setcheckedArr([...imageGallery.arrGallery])
                            }} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for image..." type="text" name="search" />
                        </label>

                    </div>
                </div>
                <div className="flex border border-t-1 border-gray-300 border-b-0 border-x-0">
                    <div className="border-r-2 border-r-gray-300 p-4">Sort by</div>
                    <div className="p-4" >
                        {mainSort.map(el =>
                            <span 
                            onClick={()=>{
                                setsortBy(el);
                            }}  className={`border ${sortBy === el ? "border-sky-400 text-sky-700 bg-sky-50": 'border-gray-300'} rounded py-1 px-3 mx-2 cursor-pointer`}>{el}</span>
                        )}
                    </div>
                </div>
            </div>
            <ImageResults checkedValues={checkedArr} myImages={[...imageGallery.arrGallery]} />
        </>
    );
}

export default FilterImage;