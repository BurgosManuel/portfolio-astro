interface Work {
    company: string;
    companySite: string;
    period: string;
    position: string;
    tasks: string[];
}

interface Skill {
    title: string;
    icon: string;
}

interface SkillSection {
    category: string;
    skills: Skill[];
}

interface Education {
    institution: string;
    period: string;
    degree: string;
    description: string[];
}