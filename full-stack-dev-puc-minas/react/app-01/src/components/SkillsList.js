export function SkillsList( { skills }) {
    return (
        <ul>
            {skills.map((skill) => <li>{skill}</li>)}
        </ul>
    )    
}