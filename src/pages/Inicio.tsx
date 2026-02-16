import MainTemplate from "../components/template/MainTemplate";
import HeroData, { type HeroDataProps } from "../components/organism/HeroData/HeroData";
import AboutMe, { type AboutMeProps } from "../components/organism/AboutMe/AboutMe";
import ProyectsData, { type ProyectsDataProps } from "../components/organism/ProyectsData/ProyectsData";
import StackArea, { type StackAreaProps } from "../components/organism/StackArea/StackArea";
import ExperienceArea, { type ExperienceAreaProps } from "../components/organism/ExperienceArea/ExperienceArea";
import Contact, { type ContactProps } from "../components/organism/Contact/Contact";

const hero: HeroDataProps = {
    className: "min-h-screen px-4 flex flex-col justify-center",
    id: "hero",
    imageText: {
        className: "flex flex-col items-center justify-center gap-5",
        image: {
            className: "",
            alt: "Me",
            src: "./img/Me.svg",
            rounded: true,
            size: 100
        },
        text: [
            {
                children: "Hi! My Name is Ian.",
                variant: "h3",
                className: "text-2xl font-medium",
                htmlFor: ""
            },
            {
                children: "FrontEnd Developer",
                variant: "p",
                className: "text-base",
                htmlFor: ""
            }

        ]
    },
    containerButtons: "flex flex-col gap-4 justify-center items-center mt-5 sm:flex-col md:flex-row md:gap-10 ",
    links: [
        { children: "Ver proyectos", href: "#proyectArea", className: "bg-blue-100 w-6/12 sm:w-6/12 md:w-4/12 lg:w-2/12 px-2 py-5 rounded-sm text-center" },
        { children: "Experiencia", href: "#experienceArea", className: "bg-blue-100 w-6/12 sm:w-6/12 md:w-4/12 lg:w-2/12 px-2 py-5 rounded-md text-center" }
    ]

}

const aboutMe: AboutMeProps = {
    id: "aboutMe",
    className: "text-center px-4 py-16 md:py-20 md:px-8 lg:py-24 lg:px-16 lg:w-5/7 lg:m-auto",
    title: {
        children: "About Me",
        className: "text-3xl md:text-4xl lg:text-5xl py-5 font-bold",
        variant: "h2"
    },
    classNameDivTextImg: "flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:flex lg:justify-center  ",

    classNameParagraph: "text-sm text-justify md:text-base md:text-left md:flex-1 lg:text-lg lg:w-1/2",
    paragraph: {
        children: "Hi! I'm a Junior Frontend Developer with experience in React and Tailwind CSS, and solid JavaScript and CSS fundamentals. Focused on building clean, reusable, and flexible interfaces following Atomic Design principles. Constantly learning through documentation, courses, and personal projects. Currently seeking a remote Junior Frontend position.",
        className: "leading-relaxed",
        variant: "p"
    },

    classNameImg: "order-1 md:order-2 lg:w-1/2 lg:flex lg:justify-center",
    image: {
        src: "./img/imgAboutMe.svg",
        alt: "AboutMe",
        className: "w-full sm:max-w-[300px] md:max-w-[300px] lg:max-w-[400px] h-aut rounded-lg",
        rounded: false,
    }
}

const proyectsData: ProyectsDataProps = {
    id: "proyectArea",
    className: "w-full px-4 py-16 md:py-20 lg:py-24 lg:w-5/7 lg:m-auto",
    title:{
        children:"Projects",
        className: "text-3xl text-center md:text-4xl lg:text-5xl py-5 font-bold",
        variant: "h2"
    },
    cardList: [
        {
            className: "grid grid-cols-1  gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
            cards: [
                {
                    className: "group w-fit relative overflow-hidden m-auto",
                    image: {
                        src: "./img/Me.svg",
                        alt: "Me",
                        className: "rounded-md w-full h-auto object-cover block",
                        rounded: false,
                        size: 300
                    },

                    classNameOverlay: "absolute inset-0 pointer-events-none ",
                    title: {
                        children: "Proyecto",
                        variant: "p",
                        className: ""
                    },

                    classNameBgBlack: "absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300",

                    classNameLinkText: "absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto",

                    classNameIcons: "",
                    linkIcons: [
                        {
                            link: {
                                href: "https://github.com/IanHMV",
                                className: "",
                                children: "",
                            },
                            icon: {
                                name: "home",
                                size: 24,
                                className: "text-blue-500"
                            }
                        },
                        {
                            link: {
                                href: "https://github.com/IanHMV",
                                className: "",
                                children: "",
                            },
                            icon: {
                                name: "home",
                                size: 24,
                                className: "opacity-100 text-blue-500"
                            }
                        }

                    ],

                    classNameTec: "",
                    tecnologias: [
                        {
                            children: "Boostrap",
                            className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                            variant: "span",
                        },
                        {
                            children: "Boostrap",
                            className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                            variant: "span",
                        }
                    ]
                },
                {
                    className: "group w-fit relative overflow-hidden m-auto",
                    image: {
                        src: "./img/Me.svg",
                        alt: "Me",
                        className: "rounded-md w-full h-auto object-cover block",
                        rounded: false,
                        size: 300
                    },

                    classNameOverlay: "absolute inset-0 pointer-events-none ",
                    title: {
                        children: "Proyecto",
                        variant: "p",
                        className: ""
                    },

                    classNameBgBlack: "absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300",

                    classNameLinkText: "absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto",

                    classNameIcons: "",
                    linkIcons: [
                        {
                            link: {
                                href: "https://github.com/IanHMV",
                                className: "",
                                children: "",
                            },
                            icon: {
                                name: "home",
                                size: 24,
                                className: "text-blue-500"
                            }
                        },
                        {
                            link: {
                                href: "https://github.com/IanHMV",
                                className: "",
                                children: "",
                            },
                            icon: {
                                name: "home",
                                size: 24,
                                className: "opacity-100 text-blue-500"
                            }
                        }

                    ],

                    classNameTec: "",
                    tecnologias: [
                        {
                            children: "Boostrap",
                            className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                            variant: "span",
                        },
                        {
                            children: "Boostrap",
                            className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                            variant: "span",
                        }
                    ]
                },
            ]
        }
    ]
}

const stackArea: StackAreaProps = {
    id: "stackArea",
    className: "w-full px-4 py-16 md:py-20 lg:py-24 lg:w-5/7 lg:m-auto",
    title:{
        children:"Stack",
        className: "text-3xl text-center md:text-4xl lg:text-5xl py-5 font-bold",
        variant: "h2"
    },
    cards: [
        {
            className: "grid m-auto grid-cols-1 w-7/10 gap-4 sm:grid-cols-2 sm:w-full md:grid-cols-3 lg:grid-cols-4",
            cardList: [
                {
                    className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                    imageText: {
                        className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                        image: {
                            alt: "Image",
                            src: "./imgStack/react.svg",
                            className: "max-w-8/10 min-w-8/10 object-contain",
                            rounded: false,
                        },
                        text: [
                            {
                                children: "React",
                                className: "text-2xl text-center p-1",
                                variant: "p",
                                htmlFor: ""
                            }
                        ]
                    },
                },
                {
                    className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                    imageText: {
                        className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                        image: {
                            alt: "Image",
                            src: "./imgStack/ts.svg",
                            className: "max-w-8/10 min-w-8/10 object-contain",
                            rounded: false,
                        },
                        text: [
                            {
                                children: "TypeScript",
                                className: "text-2xl text-center p-1",
                                variant: "p",
                                htmlFor: ""
                            }
                        ]
                    },
                },
                {
                    className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                    imageText: {
                        className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                        image: {
                            alt: "Image",
                            src: "./imgStack/js.svg",
                            className: "max-w-8/10 min-w-8/10 object-contain",
                            rounded: false,
                        },
                        text: [
                            {
                                children: "JavaScript",
                                className: "text-2xl text-center p-1",
                                variant: "p",
                                htmlFor: ""
                            }
                        ]
                    },
                },
                {
                    className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                    imageText: {
                        className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                        image: {
                            alt: "Image",
                            src: "./imgStack/mongodb.svg",
                            className: "max-w-8/10 min-w-8/10 object-contain",
                            rounded: false,
                        },
                        text: [
                            {
                                children: "MongoDB",
                                className: "text-2xl text-center p-1",
                                variant: "p",
                                htmlFor: ""
                            }
                        ]
                    },
                },
                {
                    className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                    imageText: {
                        className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                        image: {
                            alt: "Image",
                            src: "./imgStack/node.svg",
                            className: "max-w-8/10 min-w-8/10 object-contain",
                            rounded: false,
                        },
                        text: [
                            {
                                children: "Node",
                                className: "text-2xl text-center p-1",
                                variant: "p",
                                htmlFor: ""
                            }
                        ]
                    },
                },
                {
                    className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                    imageText: {
                        className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                        image: {
                            alt: "Image",
                            src: "./imgStack/git.svg",
                            className: "max-w-8/10 min-w-8/10 object-contain",
                            rounded: false,
                        },
                        text: [
                            {
                                children: "Git",
                                className: "text-2xl text-center p-1",
                                variant: "p",
                                htmlFor: ""
                            }
                        ]
                    },
                },
                {
                    className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                    imageText: {
                        className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                        image: {
                            alt: "Image",
                            src: "./imgStack/html.svg",
                            className: "max-w-8/10 min-w-8/10 object-contain",
                            rounded: false,
                        },
                        text: [
                            {
                                children: "HTML",
                                className: "text-2xl text-center p-1",
                                variant: "p",
                                htmlFor: ""
                            }
                        ]
                    },
                },
                {
                    className: "flex justify-center rounded-lg p-5 bg-gray-500 md:w-9/10",
                    imageText: {
                        className: "w-8/10 flex flex-col p-2 items-center gap-3 bg-gray-200 rounded-sm",
                        image: {
                            alt: "Image",
                            src: "./imgStack/css.svg",
                            className: "max-w-8/10 min-w-8/10 object-contain",
                            rounded: false,
                        },
                        text: [
                            {
                                children: "CSS",
                                className: "text-2xl text-center p-1",
                                variant: "p",
                                htmlFor: ""
                            }
                        ]
                    },
                },
            ]
        }
    ]
}

const experienceArea: ExperienceAreaProps = {
    id: "experienceArea",
    className: "w-full px-4 py-16 md:py-20 lg:py-24 lg:w-5/7 lg:m-auto",
    title:{
        children:"Experience",
        className: "text-3xl text-center md:text-4xl lg:text-5xl py-5 font-bold",
        variant: "h2"
    },
    toggleList: {
        toggleItems: [
            {
                className: "w-full p-2 shadow-sm rounded-md ",

                classNamePre: "flex justify-between cursor-pointer",
                title: [{
                    children: "Programador Junior",
                    className: "text-xl font-bold text-indigo-600",
                    variant: "h2"
                }, {
                    children: "FORENTEC",
                    className: " font-bold text-gray-500",
                    variant: "h3"
                }],
                classNameInfo: "transition-all ease-in-out duration-500 ml-4 mt-2 md:w-8/10 lg:w-6/10",
                info: [
                    {
                        children: "Js",
                        className: "inline-block rounded-md bg-yellow-200 w-2/10 py-1 mr-2 text-center",
                        variant: "span"
                    },
                    {
                        children: "Ruby",
                        className: "inline-block rounded-md bg-red-200 w-2/10 py-1 mr-2 text-center",
                        variant: "span"
                    },
                    {
                        children: "CSS",
                        className: "inline-block rounded-md bg-blue-200 w-2/10 py-1 mr-2 text-center",
                        variant: "span"
                    },
                    {
                        children: "Led the creation of a system for a political party, using Ruby on Rails and JavaScript, which improved data management efficiency by 25%, facilitating access and organization of real-time information.",
                        className: "mt-2 text-justify text-sm font-bold",
                        variant: "p"
                    }
                ],
                isOpen: false,
                onClick: () => { },
            },
            {
                className: "w-full p-2 shadow-sm rounded-md",

                classNamePre: "flex justify-between cursor-pointer",
                title: [{
                    children: "Programador Junior",
                    className: "text-xl font-bold text-indigo-600",
                    variant: "h2"
                }, {
                    children: "FORENTEC",
                    className: " font-bold text-gray-500",
                    variant: "h3"
                }],
                classNameInfo: "transition-all ease-in-out duration-500 ml-4 mt-2 md:w-8/10 lg:w-6/10",
                info: [
                    {
                        children: "Js",
                        className: "inline-block rounded-md bg-yellow-200 w-2/10 py-1 mr-2 text-center",
                        variant: "span"
                    },
                    {
                        children: "Ruby",
                        className: "inline-block rounded-md bg-red-200 w-2/10 py-1 mr-2 text-center",
                        variant: "span"
                    },
                    {
                        children: "CSS",
                        className: "inline-block rounded-md bg-blue-200 w-2/10 py-1 mr-2 text-center",
                        variant: "span"
                    },
                    {
                        children: "Led the creation of a system for a political party, using Ruby on Rails and JavaScript, which improved data management efficiency by 25%, facilitating access and organization of real-time information.",
                        className: "mt-2 text-justify text-sm font-bold",
                        variant: "p"
                    }
                ],
                isOpen: false,
                onClick: () => { },
            },
        ]
    }
}

const contact: ContactProps = {
    id: "contact",
    className: "bg-gray-200 px-4 rounded-md py-16 md:py-20 lg:py-24",
    classNameDivTextIcon: "bg-gray-100 rounded-lg py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-center lg:w-1/2 lg:m-auto lg:py-10 lg:gap-20",

    classNameDivText: "",
    text: {
        variant: "h2",
        children: "Contact with Me!",
        className: "text-3xl text-center font-bold",
    },
    classNameDivIcons: "flex gap-3 justify-center",
    listIcons: [
        {
            icon: {
                name: "github",
                className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl", // Responsive
            },
            link: {
                href: "https://github.com/IanHMV",
                children: "",
                className: ""
            }
        },
        {
            icon: {
                name: "linkedin",
                className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl", // Responsive
            },
            link: {
                href: "https://www.linkedin.com/in/ianhmv/",
                children: "",
                className: ""
            }
        },
    ]
}


const Inicio = () => {

    return (
        <MainTemplate
            heroSection={
                <>
                    <HeroData {...hero} />
                </>}
            aboutSection={
                <>
                    <AboutMe {...aboutMe} />
                </>
            }
            experienceSection={<ExperienceArea {...experienceArea} />}
            technologiesSection={<StackArea {...stackArea} />}
            proyectsSection={<ProyectsData {...proyectsData} />}
            contactFooter={<Contact {...contact} />}
        >

        </MainTemplate>
    );
};

export default Inicio;
