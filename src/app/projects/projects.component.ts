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

  public NayaSoftwareProjects = [
    {
      title: 'API Integration',
      description: `Successfully executed a complex API integration project, facilitating efficient communication and data synchronization across multiple systems. This project showcased expertise in API design, development, and seamless system integration.`
    },
    {
      title: 'Word Integration (WOPI Framework)',
      description: `Integrated WOPI Framework for Word Web, enhancing functionality and seamless integration in .NET Core API and Angular app.`
    },
    {
      title: 'OAuth 2.0 Integration',
      description: 'Enabled secure authentication and authorization by integrating OAuth 2.0 in API and Angular, ensuring seamless user access to protected resources. Implemented robust security measures for authentication and authorization workflows, enhancing overall system security.'
    },
    {
      title: 'Document Comparision',
      description: `Developed document comparison functionality using Aspose library for precise identification of differences. Leveraged robust features of Aspose for accurate highlighting and seamless integration, demonstrating expertise in document processing and comparison solutions.`
    },
    {
      title: 'Dynamic Document Creation (OpenXML Library)',
      description: `Integrated OpenXML library into .NET Core API for seamless document processing and manipulation, enabling document generation, modification, and data extraction. Demonstrated proficiency in leveraging OpenXML functionalities for various document formats.`
    },
    {
      title: 'PDF Text Recognition (Sync Fusion OCR Library)',
      description: `Implemented Syncfusion OCR library for PDF text recognition, facilitating extraction and processing of textual content from PDF documents. Enhanced data analysis capabilities, enabling automated extraction, search, and indexing of textual data within PDF files.`
    },
    {
      title: 'Real-time Project Updates (Sync Fusion Library)',
      description: `Implemented real-time project updates using Syncfusion library, enabling seamless collaboration and instant progress tracking.`
    },
    {
      title: 'Word Add In (VSTO Add-In Library)',
      description: 'Developed Word Add-In using VSTO-AddIn, expanding document processing capabilities in Microsoft Word.'
    }
    ,
    {
      title: 'Project Management',
      description: `Successfully coordinated development and testing process in Nepal, collaborating with the US team. Provided strong leadership, training, and guidance to foster a high-performing work environment 
      for the development and test team.`
    }
  ];

  public IMarkDigitalProjects = [
    {
      title: '.NET Core API',
      description: `As a .NET Core developer, I built and implemented diverse endpoints in a RESTful API, meeting various requirements. Business logic services were integrated for efficient and reliable data processing, leveraging the power of the .NET Core framework for a robust and scalable API solution.`
    },
    {
      title: 'Angular Web Application',
      description: `Build Hospital Web Application in AngularDeveloped a dynamic and user-friendly hospital web interface using the Angular framework. Created modules for Patient Registration, Billing, Clinical, and Radiology, enhancing functionality and improving the user experience.`
    },
    {
      title: 'Module Integration',
      description: `Developed and seamlessly integrated modules for Patient Registration, Billing, and Lab Reports into the Hospital Management system, enhancing functionality and streamlining processes.`
    }
  ];

}
