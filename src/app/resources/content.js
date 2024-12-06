import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Duc',
    lastName: 'Dang',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Engineer',
    avatar: '/images/avatar4.png',
    location: 'Asia/Ho_Chi_Minh', // Updated to the correct IANA time zone identifier for Vietnam
    languages: ['English', 'Vietnamese']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/llamas-laptrinh',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/duc-d-2a1b2a151/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:dangtrungduc51@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software engineer and builder</>,
    subline: <>I'm Duc, a software engineer at <InlineCode>DTD solutions</InlineCode>, where I craft intuitive<br /> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Experienced Software Engineer with over 3 years of hands-on expertise in developing full-stack web applications, specializing in scalable front-end interfaces with ReactJS/NextJS and secure back-end APIs with Node.js and Python. Proficient in integrating databases, optimizing system performance, and managing end-to-end API integration. Known for strong analytical skills, problem-solving abilities, and a commitment to delivering high-quality code</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'DTD Solutions',
                timeframe: '03/2024 - Present',
                role: 'Full Stack Engineer',
                achievements: [
                    <>Designed user-friendly interfaces with NextJS, ensuring optimal user experiences.</>,
                    <>Collaborated with team members on requirements analysis and software design to streamline development cycles and maintain code quality.</>,
                    <>mplemented Docker for deployment, setting up monitoring and logging systems for real-time application tracking</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Marathon Education (YC W22)',
                timeframe: '08/2023 - 09/2024',
                role: 'Senior IT Teacher',
                achievements: [
                    <>Developed and delivered technical training programs to students.</>,
                    <>Designed and created course materials.</>,
                    <>Assessed student progress and provided feedback</>
                ],
                images: []
            },
            {
                company: 'Viet Japan Partner',
                timeframe: '07/2022 - 10/2023',
                role: 'Technical Trainer',
                achievements: [
                    <>Craft an intuitive and user-friendly UI/UX for a Check In and Booking Event app.</>,
                    <>Effectively lead and manage a team of five members across multiple projects.</>,
                    <>Design and implement an employee management system using Firebase serverless functions and services to store working hours and calculate payout data in Firestore.</>,
                    <>Develop comprehensive lesson plans and conduct training sessions on ReactJS, React Native, and the company's workflow for multiple intern teams.</>,
                    <>Review code in Github and write unit test</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/img-15.jpg',
                        alt: 'react-training',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'NUS Technology',
                timeframe: '09/2021 - 12/2021',
                role: 'Mobile Developer',
                achievements: [
                    <>Maintan and build filter featues for a e-comerce application and write unit test.</>,
                    <>Build split bill function for a flight booking application.</>,
                    <>Build authenticate features using biomatric include Face,Fingerprint..</>,
                    <>Publish app to appstore, google store and solve review of the app.</>
                ],
                images: []
            },
            {
                company: 'LengKeng Technology',
                timeframe: '10/2020 - 09/2021',
                role: 'Mobile Developer',
                achievements: [
                    <>Maintain and upgrade version react native application for employee of company.</>,
                    <>Build and update UI/UX for web app, base feedback of sale and marketing teams.</>,
                    <>Optimized code for performance and scalability.</>,
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University Of Economics Ho Chi Minh City',
                description: <>Bachelor's degree: Studied software engineering.</>,
            },
            {
                name: 'Coursera',
                description: <>Studied online data analytic and AI engineering.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma and brand logo.</>,
                images: [
                    {
                        src: '/images/projects/nft-marketplace/NFT market.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/nft-marketplace/MarketPlace.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/nft-marketplace/Detail NFT.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/brand-logos/solana.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Tailwindcss + Blockchain.</>,
                images: [
                    {
                        src: '/images/projects/project-01/kicket-cover.jpg',
                        alt: 'Project image',
                        width: 9,
                        height: 16
                    },
                ]
            },
            {
                title: 'React Native',
                description: <>Building cross platform apps with Expo and React Native CLI.</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/kicket-cover.jpg',
                    //     alt: 'Project image',
                    //     width: 9,
                    //     height: 16
                    // },
                ]
            },
            {
                title: 'Research',
                description: <>First Author of Blockchain research paper.</>,
                images: [
                    {
                        src: '/images/certificates/img-01.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Achievements',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/certificates/img-01.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/certificates/img-02.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/certificates/img-03.png',
            alt: 'image',
            orientation: 'horizontal'
        },
        // {
        //     src: '/images/gallery/img-04.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-05.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-06.jpg',
        //     alt: 'image',
        //     orientation: 'vertical'
        // },
        // {
        //     src: '/images/gallery/img-07.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-08.jpg',
        //     alt: 'image',
        //     orientation: 'vertical'
        // },
        // {
        //     src: '/images/gallery/img-09.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-10.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-11.jpg',
        //     alt: 'image',
        //     orientation: 'vertical'
        // },
        // {
        //     src: '/images/gallery/img-12.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-13.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
        // {
        //     src: '/images/gallery/img-14.jpg',
        //     alt: 'image',
        //     orientation: 'horizontal'
        // },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };