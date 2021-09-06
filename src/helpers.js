export const cambiarColor= (presupuerto,restate) => {
    let clase;
    if(presupuerto / 4 > restate) {
        clase = 'alert alert-danger';
    } else if (presupuerto / 2 > restate){
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }
    return clase;
}