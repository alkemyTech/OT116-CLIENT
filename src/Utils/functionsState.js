export const modifyElement = (array, newElement) => {
    let element= array.find(e=>e.id===newElement.id)
    element=newElement
    return array;
};

export const removeElement = (array, id) => {
    let newArray= array.filter(e=> e.id !== id)
    return newArray;
};
