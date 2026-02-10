

export type MainTemplateProps = {
    heroSection?: React.ReactNode;
    aboutSection?: React.ReactNode;
    experienceSection?: React.ReactNode;
    technologiesSection?: React.ReactNode;
    projectsSection?: React.ReactNode;
    contactFooter?: React.ReactNode;
}

const MainTemplate = ({
    heroSection,
    aboutSection,
    experienceSection,
    technologiesSection,
    projectsSection,
    contactFooter
}: MainTemplateProps) => {
    return (
        <div className="home-template">
            {heroSection}
            {aboutSection}
            {experienceSection}
            {technologiesSection}
            {projectsSection}
            {contactFooter}
        </div>
    );
}

export default MainTemplate;