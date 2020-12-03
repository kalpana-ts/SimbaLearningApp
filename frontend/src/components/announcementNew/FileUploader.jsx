import React, { useEffect, useState } from 'react';
import ReactImageUploadComponent from 'react-images-upload';
import { storage } from "../../firebase";

function FileUploader({ setFileUrl }) {
//   const [payload, setPayload] = useState(null);
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);

/*   const updateImage = event => {
    var file = event[0];
    var data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'Simba_Img');
    setPayload(data);
  }; */
/*   useEffect(() => {
    const abortFetch = new AbortController();
    const sendImage = async () => {
      try {
        if (payload !== null) {
          const response = await fetch(
            'https://api.cloudinary.com/v1_1/dmythh2na/image/upload',
            {
              method: 'post',
              body: payload,
              signal: abortFetch.signal
            }
          );
          const jsonResponse = await response.json();
          setImgUrl(jsonResponse['secure_url']);
          setUploading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendImage();
    return () => abortFetch.abort();
  }, [payload, setImgUrl]); */


  const handleChange = e => {
    if (e.target.files[0]) {
        setFile(e.target.files[0]);
    }
  };
  
  
  const handleUpload = () => {
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            setFileUrl(url);
          });
      }
    );
  };

  console.log("file: ", file);
  return (

    <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload</button>
    </div>

  );
}

export default FileUploader;
