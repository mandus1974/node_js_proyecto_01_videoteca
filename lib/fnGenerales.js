

function buscar_por_id(arreglo, id){
    return(arreglo.find(u=>u.id == id));
}

function buscar_por_nombre(arreglo, nombre){
    return(arreglo.find(u=>u.nombre == nombre));
}


exports.buscar_por_id = buscar_por_id;
