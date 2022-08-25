import { throwError, Observable, of } from 'rxjs';

export const handleErrorObservable = function <T>(operation = 'operation', result?: T) {
    // if (error.error instanceof ErrorEvent) {
    //     console.error('Error sending a request", error.error.message');
    // } else {
    //     console.log('error', error);
    //     console.error(
    //         `Backend returned code ${error.status}, ` +
    //         `body was: ${error.error}`);
    // }
    // return throwError(
    //     'Something bad happened; please try again later.');
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error, 'handleerrorobsrbale'); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
        return throwError(error);

        // Let the app keep running by returning an empty result.
        //  return of(result as T);
    };
};
export function convertDataURIToBinary(dataURI: any) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}
