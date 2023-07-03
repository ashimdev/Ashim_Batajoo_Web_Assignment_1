import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {

	constructor(private http: HttpClient) { }

	public Get() {
		return this.http.get<Project[]>('http://localhost:4000/project');
	}

	public GetLocal() {
		return this.http.get<Project[]>('assets/data/projects.json');
	}
}
