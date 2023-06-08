import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public Photos = [
    {
      image: 'assets/layout/images/portfolio/1.jpg',
      title: 'Pokhara City'
    },
    {      
      image: 'assets/layout/images/portfolio/2.jpg',
      title: 'Creating Balance'
    },
    {      
      image: 'assets/layout/images/portfolio/3.jpg',
      title: 'End of the Day'
    },
    {
      image: 'assets/layout/images/portfolio/4.jpg',
      title: 'Fewa Lake'
    },
    {
      image: 'assets/layout/images/portfolio/5.jpg',
      title: 'Cycling'
    },
    {
      image: 'assets/layout/images/portfolio/6.jpg',
      title: 'Mount Fishtail'
    }
  ];

  public Videos = [
    {
      title: 'Ride to Aatighar Village',
      link: 'https://www.youtube.com/embed/lfrCYhKaHi4',
      description: 'Aatighar is a beautiful village located 20 km northeast of Pokhara. Tourists can admire its unique traditional culture which is well preserved by the local peoples. You can find wonderful hospitality and good local food at Aatighar Homestay'
    },
    {
      title: 'Ride to Tanting Village',
      link: 'https://www.youtube.com/embed/kLT2fBwNkko',
      description: 'Tanting Village is on the opposite mountain of Sikles Village and overlooks the Himalayas including Annapurna II, Annapurna IV, and Lamjung.'
    },
    {
      title: 'Ride to Kapuche Glacier Lake',
      link: 'https://www.youtube.com/embed/2z-wjHygeQw',
      description: 'Kaphuche Lake is the lowest altitude glacier lake located just 2,546 meters above sea level. A unique location, pristine natural presence, beautiful mountain villages, high alpine meadows snuggled below the towering mountains of Lamjung Himal, Annapurna II (7937m), Annapurna IV (7525m).'
    }
  ];

}
