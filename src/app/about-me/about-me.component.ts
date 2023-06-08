import { Component } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
    private readonly linkedInURL: string =
        'https://www.linkedin.com/in/ashim-batajoo-257815129/';
    private readonly youtubeURL: string = 'https://www.youtube.com/@ashimbatajoo';
    private readonly imageURL: string = 'https://500px.com/p/AsimBatajoo'

    public get DescriptionText(): string {
        return `But that's not all—I've also got a solid background as a
    software engineer. Over the years, I've gained tons of
    experience in managing successful projects, leading teams,
    and delivering top-notch software solutions. I'm all about
    blending my management skills, technical know-how, and a
    collaborative approach to achieve project goals, allocate
    resources effectively, and foster continuous improvement.`;
    }

    public get IntroText(): string {
        return `I'm all about coding and cycling.<br />
      Oh, and I love making cycling videos too!`;
    }

    public OnClickOpenLinkedInButton(): void {
        window.open(this.linkedInURL, '_blank');
    }

    public OnClickYoutubeButton(): void {
        window.open(this.youtubeURL, '_blank');
    }
    
    public OnClickImageButton(): void {
        window.open(this.imageURL, '_blank');
    }
}
