import React from 'react';
import { Link } from 'react-router-dom';

function StudyMaterialCard(material) {
  
  return (
            <tbody className="assignement-tbl-tbody">
              <tr>
                <th scope="row">{material.material.id}</th>
                <td>{material.material.user.name}</td>
                <td><a href={material.material.fileUrl} target="_blank">{material.material.title} </a></td>
                <td>{material.material.grade}</td>
                <td>{material.material.subject}</td>
                <td>{material.material.postDate}</td>
                <td>
                    <Link className="btn-studymaterial-view" to={{ pathname: `/studymaterial/${material.material.id}`, state: { material } }}>
                        View 
                    </Link>
                </td>
              </tr>
            </tbody>
  );
}


export default StudyMaterialCard;
