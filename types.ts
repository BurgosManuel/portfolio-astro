interface WorkRole {
    position: string;
    period: string;
    tasks: string[];
}

interface Work {
    company: string;
    companySite: string;
    period: string;
    roles: WorkRole[];
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