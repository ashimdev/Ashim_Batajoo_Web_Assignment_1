import { Component } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
    public Services = {
        Web: {
            Title: 'Web Appliation Development',
            Description: `I specialize in developing enterprise web applications
      using Angular, integrating libraries like RxJS to
      enhance functionality and provide optimal user
      experiences. Let's collaborate to create tailored
      solutions for your business, leveraging the power of
      Angular and libraries to deliver high-performance web
      applications.`,
        },
        API: {
            Title: 'API Development and Integration',
            Description: ` I specialize in building and enhancing .NET Core APIs
            while integrating powerful libraries like Word Web WOPI
            Framework, OpenXML, SignalR, Aspose.Words, SyncFusion
            PDF, and more to extend software capabilities and
            features. Let's collaborate to take your software to the
            next level.`,
        },
        SQL: {
            Title: 'SQL Server',
            Description: `I specialize in SQL Server, utilizing its robust
            features and capabilities to design and optimize
            databases, ensure efficient data storage and retrieval,
            and deliver high-performance solutions for your
            enterprise web applications.`,
        },
        Azure: {
            Title: 'Azure Resource Management',
            Description: ` I specialize in Azure Resource Management, leveraging
            libraries and tools to optimize and maximize the
            potential of your cloud infrastructure.`,
        },
        ProjectManagement: {
            Title: 'Project Management',
            Description: `I specialize in project management, utilizing
            industry-leading tools like JIRA to efficiently plan,
            execute, and deliver projects, ensuring optimal outcomes
            and client satisfaction.`,
        },
        Training: {
            Title: 'Training',
            Description: `I specialize in providing comprehensive training and
            mentorship to associate developers, fostering skill
            development and knowledge enhancement, while also
            conducting performance reviews to drive optimal
            productivity and maintain high-quality deliverables
            within the development team.`,
        },
    };
}
