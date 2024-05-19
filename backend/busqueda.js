export function busquedaBinaria (A,p,q,r){

    let posicion = -1;
    
    if(p<=q){

        let m = Math.round((p+q)/2);

        if(r == A[m]){
            posicion = m;
        }else{

            if(r < A[m]){

                posicion = busquedaBinaria(A,p,m-1,r)

            }else{

                posicion = busquedaBinaria(A,p,m+1,r)

            }
        }

    }

    return posicion;

}