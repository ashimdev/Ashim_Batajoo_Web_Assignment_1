import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../app-services/project.service';
import { Project } from '../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public Photos: Project[] = [];
  public Videos: Project[] = [];
  public NayaSoftwareProjects: Project[] = [];
  public IMarkDigitalProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects() {
    this.projectService.Get()
    .subscribe({
      next: (projects: Project[]) => {
        if (!projects?.length) {
          this.getProjectsLocal();
          return;
        };

        this.initializeProjectData(projects);
       
      },
      error: (err) => {
        this.getProjectsLocal();
        console.error(err);
      }
    });
  }

  private getProjectsLocal() {
    this.projectService.GetLocal()
    .subscribe({
      next: (projects: Project[]) => {
        this.initializeProjectData(projects);
       
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private initializeProjectData(projects: Project[]) { 
    this.Photos = projects.filter(p => p.projectType?.toLowerCase() === ProjecType.Photo.toLowerCase());
    this.Videos = projects.filter(p => p.projectType?.toLowerCase() === ProjecType.Video.toLowerCase());
    this.NayaSoftwareProjects = projects.filter(p => p.projectType?.toLowerCase() === ProjecType.NayaSoftware.toLowerCase());
    this.IMarkDigitalProjects = projects.filter(p => p.projectType?.toLowerCase() === ProjecType.IMarkDigital.toLowerCase());
  }
}

export class ProjecType {
  public static readonly Photo = "Photo";
  public static readonly Video = "Video";
  public static readonly NayaSoftware = "NayaSoftware";
  public static readonly IMarkDigital = "IMarkDigital";

}
