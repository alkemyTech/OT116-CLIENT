export const readImageFile = (imageFile, onLoadCallback) =>{
    const imageUrl = new FileReader();
    imageUrl.readAsDataURL(imageFile)
    imageUrl.onload=(event)=>{
      onLoadCallback(event.target.result)
    }
}

  export const setUrlImage = (imageFile,setFieldValue) =>{

    readImageFile(imageFile,function(file){
     setFieldValue("image",file)
    })
}
