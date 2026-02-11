export type MainTemplateProps = {
    heroSection?: React.ReactNode;
    aboutSection?: React.ReactNode;
    experienceSection?: React.ReactNode;
    technologiesSection?: React.ReactNode;
    proyectsSection?: React.ReactNode;
    contactFooter?: React.ReactNode;
}

const MainTemplate = ({
    heroSection,
    aboutSection,
    experienceSection,
    technologiesSection,
    proyectsSection,
    contactFooter
}: MainTemplateProps) => {
    return (
        <div className="home-template">
            {heroSection}
            {aboutSection}
            {experienceSection}
            {technologiesSection}
            {proyectsSection}
            {contactFooter}
        </div>
    );
}

export default MainTemplate;