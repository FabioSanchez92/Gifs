import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = ()=>{
    //     setCategories([...categories, 'HunterXhunter']);
    // }

    return (
        <div>
            <h2>gifExpertApp</h2>
            <AddCategory  setCategories={setCategories} ></AddCategory>
            <hr></hr>
            <ol>
                {
                    categories.map(category =>(
                    <GifGrid 
                            key = { category }
                            category = { category }
                        />   
                    ))
                }
            </ol>
        </div>
    )
}
