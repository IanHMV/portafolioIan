import MainTemplate from "../components/template/MainTemplate";
import HeroData from "../components/organism/HeroData/HeroData";
import AboutMe from "../components/organism/AboutMe/AboutMe";
import ProyectsData from "../components/organism/ProyectsData/ProyectsData";
import StackArea from "../components/organism/StackArea/StackArea";

import type { AboutMeProps } from "../components/organism/AboutMe/AboutMe";
import type { HeroDataProps } from "../components/organism/HeroData/HeroData";
import type { ProyectsDataProps } from "../components/organism/ProyectsData/ProyectsData";
import type { StackAreaProps } from "../components/organism/StackArea/StackArea";


const hero: HeroDataProps = {
    className: "min-h-screen flex flex-col justify-center",
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
        { children: "Ver proyectos", href: "#proyectos", className: "bg-blue-100 w-6/12 sm:w-6/12 md:w-4/12 lg:w-2/12 px-2 py-5 rounded-sm text-center" },
        { children: "Experiencia", href: "#experiencia", className: "bg-blue-100 w-6/12 sm:w-6/12 md:w-4/12 lg:w-2/12 px-2 py-5 rounded-md text-center" }
    ]

}

const aboutMe:AboutMeProps = {
        id:"aboutMe", 
        className: "text-center px-4 md:px-8 lg:px-16 lg:w-5/7 lg:m-auto",
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

const proyectsData:ProyectsDataProps  = {
    className: "",
    id: "proyectArea",
    cardList: [
        {
            className: "grid grid-cols-1 gap-5 sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4",
            cards: [
                {
                    className: "",
                    image: {
                        src: "./img/Me.svg",
                        alt: "Me",
                        className: "rounded-md",
                        rounded: false,
                        size: 300
                    },

                    classNameOverlay: "",
                    title: {
                        children: "Proyecto",
                        variant: "p",
                        className: ""
                    },

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
                    className: "",
                    image: {
                        src: "./img/Me.svg",
                        alt: "Me",
                        className: "rounded-md",
                        rounded: false,
                        size: 300
                    },

                    classNameOverlay: "",
                    title: {
                        children: "Proyecto",
                        variant: "p",
                        className: ""
                    },

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
                }
            ]
        }
    ]
}

const stackArea:StackAreaProps ={
        id: "stackArea",
        className: "",
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

const Inicio = () => {

    return (
        <MainTemplate
            heroSection={
                <>
                    <HeroData {...hero} />
                </>}
            aboutSection={
                <>
                    <AboutMe {...aboutMe}/>
                </>
            }
            experienceSection={<></>}
            technologiesSection={<StackArea {...stackArea}/>}
            proyectsSection={<></>}
            contactFooter={<></>}
        >

        </MainTemplate>
    );
};

export default Inicio;
