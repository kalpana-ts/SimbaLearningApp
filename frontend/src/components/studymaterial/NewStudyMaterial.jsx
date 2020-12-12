import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StudyMaterialApi from '../../api/StudyMaterialApi';
import StudyMaterialForm from '../../components/studymaterial/StudyMaterialForm';

function NewStudyMaterial() {
    const[material,setMaterial]=useState(null);
    const history = useHistory();

    useEffect(()=>{
        const createStudyMaterial = async () => {
            try {
              if (material !== null) {
                const response = await StudyMaterialApi.createStudyMaterial(material); // We need to check response success before redirecting.
                history.push('/studymaterial');
              }
            } catch (error) {
              console.log(error);
            }
          };
          createStudyMaterial();
    },[history, material]);

    return(
        <div>
            <StudyMaterialForm setMaterial={setMaterial}/>
        </div>
    );


}

export default NewStudyMaterial;