import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
import {Genre} from '../models/genre';
import {Book} from '../models/book';
import {Discount} from '../models/discount';


@Injectable({
  providedIn: 'root'
})
export class BookService extends GenericService {

  constructor(private http: HttpClient) {
    super();
    this.url += 'book/';
  }


  public getAllGenres(): Observable<Array<Genre>> {
    return <Observable<Array<Genre>>> this.http.get(this.url + 'genre/');
  }

  public getAllBooks(): Observable<Array<Book>> {
    return <Observable<Array<Book>>> this.http.get(this.url);
  }

  public getBooksByGenre(id: number): Observable<Array<Book>> {
    return <Observable<Array<Book>>> this.http.get(this.url + 'genre/' + id);
  }

  get(id: number): Observable<Book> {
    return <Observable<Book>> this.http.get(this.url + id);

  }

  addGenre(genre: Genre): Observable<Genre[]> {
    return <Observable<Genre[]>> this.http.post(this.url + 'genre/', genre);
  }

  addBook(book: Book): Observable<Book> {
    return <Observable<Book>> this.http.post(this.url, book);
  }

  saveDiscount(discount: Discount, bookId: number): Observable<Book> {
    return <Observable<Book>> this.http.post(this.url + 'discount/' + bookId, discount);
  }
}
