import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Contact} from './contact';
import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Origin' : '*'})
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // getContacts()
  // {
  //   console.log('testing');
  //   return this.http.get('http://localhost:3000/api/contacts'); 

  // }

  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>
      ('http://localhost:3000/api/contacts');
  }

  addContact(newContact)
  {
    var headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact,httpOptions);
  }

  deleteContact(id)
  {
     return this.http.delete('http://localhost:3000/api/contacts/'+id);
  }
}
