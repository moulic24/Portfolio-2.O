import outlinef from '../../src/Images/outlinef.gif'
import backend from '../../src/Images/backend.gif'
import tools from '../../src/Images/tools.gif'

export const SKILLS = [
    {
        title:"Frontend",
        icon:outlinef,
        skills:[
            {skill:"HTML",percentage:"85%"},
            {skill:"CSS",percentage:"85%"},
            {skill:"JavaScript",percentage:"85%"},
            {skill:"React.js",percentage:"85%"},
        ],
    },
    {
        title:"Backend",
        icon:backend,
        skills:[
            {skill:"Node.js",percentage:"80%"},
            {skill:"Express.js",percentage:"75%"},
            {skill:"Web Sockets",percentage:"70%"},
        ],
    },
    {
        title:"Database",
        icon:backend,
        skills:[
            {skill:"MongoDB",percentage:"75%"},
            {skill:"MySQL",percentage:"75%"},
        ],
    },
    {
        title:"Tools",
        icon:tools,
        skills:[
            {skill:"Git",percentage:"85%"},
            {skill:"Jira",percentage:"80%"},
        ],
    },
];
