import { Observable } from 'rxjs';

export interface BaseSecureHttpService<T> {
  GetAll(): Observable<T[]>;
  Get(id: string | number): Observable<T>;
  Post(data: T): Observable<T>;
  Put(id: string | number, data: T): Observable<number>;
  Delete(id: string | number): Observable<number>;
}
