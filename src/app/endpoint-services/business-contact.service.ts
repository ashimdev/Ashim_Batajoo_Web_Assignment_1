import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusinessContact } from '../interfaces/business-contact.interface';

@Injectable({
	providedIn: 'root',
})
export class BusinessContactService {

	constructor(private http: HttpClient) { }
	
	public Create(businessContactID: string, businessContact: BusinessContact) {
		return this.http.put<BusinessContact[]>(`http://localhost:4000/businessContact/${businessContactID}`, businessContact);
	}

	public Update(businessContactID: string, businessContact: BusinessContact) {
		return this.http.put<BusinessContact[]>(`http://localhost:4000/businessContact/${businessContactID}`, businessContact);
	}

	public Get() {
		return this.http.get<BusinessContact[]>('http://localhost:4000/businessContact');
	}

	public GetByID(businessContactID: string) {
		return this.http.get<BusinessContact[]>(`http://localhost:4000/businessContact/${businessContactID}`);
	}

	public Delete(businessContactID: string) {
		return this.http.delete<BusinessContact[]>(`http://localhost:4000/businessContact/${businessContactID}`);
	}


}
