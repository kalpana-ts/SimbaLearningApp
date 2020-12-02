import React, { useEffect,useState } from 'react';
//import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';

function FileUploader({setUploading, setFileUrl}){
    const [selectedFile,setSelectedFile]= useState();
   // const [loading,setLoading]= useState(false);

    const handleChange = event => {
        var file = event.target.files[0];
        const data= new FormData();
        data.append('file', file);
        data.append('upload_preset', 'simbalearningapp');
        
        setSelectedFile(data);
    }
      //  setLoading(true);
    //}

    
    //const handleFileUpload =  e => {
        useEffect(() => {
        const abortFetch = new AbortController();
        const sendFile = async () => {
          try {
            if (selectedFile !== null) {
              const response = await fetch(
                'https://api.cloudinary.com/v1_1/simbaapp/image/upload', 
                {
                  method: 'post',
                  body: selectedFile,
                  signal: abortFetch.signal
                }
              );
              const jsonResponse = await response.json();
              setFileUrl(jsonResponse['secure_url']);
              setUploading(false);
            }
          } catch (error) {
            console.log(error);
          }
        };
        sendFile();
        return () => abortFetch.abort();
        
    }, [selectedFile, setFileUrl, setUploading]);

      return (
        
        <div>
        <input
        onChange={handleChange}
        //accept=".jpg, .png, .jpeg, .pdf, .xlsx , .doc"
       accept= "file_extension,audio/*,video/*,image/*,media_type"
        className="fileInput mb-2"
        type="file"
      />
      {/* <div>
        <button
          onClick={handleFileUpload}
          disabled={!selectedFile}
          className="btn btn-primary mb-2">Submit</button>
      </div> */}
        </div>
      );

}

export default FileUploader;
