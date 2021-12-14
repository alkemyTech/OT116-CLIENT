export const setCKEditorText = (values,field)=>{
    return values[field].replace(/<[^>]+>/g, "") ||  ""
    ;
};
