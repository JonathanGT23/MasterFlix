export  const ValidarTitulo = (titulo) =>{
    const length = titulo.length;
    return length >= 2 ? true : false 
}

export  const ValidarTextArea = (textArea) =>{
    const length = textArea.length;
    return length >= 2 && length < 120 ? true : false 
}

export  const ValidarColor = (color) =>{
    const length = color.length;
    return length >= 1 ? true : false 
    
}

export  const ValidarSelect = (select) =>{
    const length = select.length;
    return length >= 1 ? true : false 
    
}

export  const ValidarNumber = (number) =>{
    const length = number;
    
    if (length === "1847"){
        return true
    }else{
        return false
    }
   // return length >= 4 ? true : false 

    
}

