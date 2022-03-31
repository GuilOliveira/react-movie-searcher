function getSearchButtons(actual, last){
    let i = []
    let lista = []
    if(actual<=5){
        if(last<10){
            i = [1, last]
        }else{i = [1, 9]}
    }else if((actual+5)>last){
        if(last<9){
            i = [1, last]
        }else{
        i = [(last-8),last]
        }
    }else{i = [(actual-4), (actual+4)]}
    

    for(let j = i[0];j < (i[1]+1);j = j+1 ){
        lista.push(j)

    }
    return lista
}

export default getSearchButtons