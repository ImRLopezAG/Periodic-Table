const IsEqual = (group, val)=>{

    let isValid = true
    
    if(group == val){
        isValid = true;
    }else{
        isValid = false;
    }

    return isValid;
}


exports.IsEqual = IsEqual;