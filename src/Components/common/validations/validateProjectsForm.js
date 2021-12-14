export const isSmallerTha = (list, maxSize) => list.length < maxSize;

export const validateProjectsForm = (values) => {
    let errors={}
    if(!values.image) errors.image='You need to add a image';

    if(!values.title) errors.title='You need to enter a name';
    if(isSmallerTha(values.title,4)) errors.title='The name must have more than 4 letters';

    if(!values.description) errors.description='You need to add a description';

    return errors

};
