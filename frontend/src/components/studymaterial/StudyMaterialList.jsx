import React, { useEffect, useState } from "react";
import StudyMaterialApi from '../../api/StudyMaterialApi';
import StudyMaterialCard from '../studymaterial/StudyMaterialCard';


function StudyMaterialList(){
    const [materials, setMaterials]= useState([]);

    useEffect(()=>{
        
        const fetchMaterials = async() => {
            const response = await StudyMaterialApi.getAllStudyMaterial();
            setMaterials(response.data);
        };
        fetchMaterials();
    },[]);

    console.log(materials);
    const materialsList = materials.map(material => 
    <StudyMaterialCard key={material.id} material={material}/>    
    );

    return (
        materials.length===0 ? <p>No Materials to show</p>
     : 
        <div className="col-lg-10 material-list-table">
        <table class="table">
        <thead class="teacher-material-tbl-row">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Posted By</th>
            <th scope="col">Study Material Title</th>
            <th scope="col">Grade</th>
            <th scope="col">Subject</th>          
            <th scope="col">Action</th>
            </tr>
        </thead>
                {materialsList}
        </table>
        </div>);
}

export default StudyMaterialList;