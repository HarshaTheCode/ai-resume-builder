import { OpenRouter } from '@openrouter/sdk';
import resumemodel from '../models/resume.model.js';


export const  resumebuilder =  async(req,res)=>{
   
    const name = "Harsha  ";
const title = "Full Stack Developer";
const email = "harsha.reddy@example.com";
const phone = "+91-9876543210";
const location = "Hyderabad, India";
const linkedin = "linkedin.com/in/harshareddy";
const website = "harshareddy.dev";

const summary = "Passionate Full Stack Developer with strong problem-solving skills and a love for building impactful web applications using the MERN stack. Focused on creating scalable, efficient, and user-friendly products.";

const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "RESTful APIs",
  "Git & GitHub",
  "Cloud Deployment (Render, Vercel)"
].join(", ");

const experience = `
- **Full Stack Developer Intern at TechNova Solutions (May 2024 - Aug 2024)**  
  Worked on building scalable REST APIs and integrating them with React-based dashboards.  
  • Implemented CRUD operations and JWT authentication for 10K+ active users.  
  • Improved API response time by 35% by optimizing MongoDB queries.  

- **Freelance Web Developer (2023 - 2024)**  
  Built responsive portfolio websites and mini e-commerce stores for small businesses.  
  • Delivered 8+ custom websites using React & Express.  
  • Integrated payment gateway using Stripe and improved checkout UX.
`;

const education = `
- **Bachelor of Technology in Computer Science**  
  Jawaharlal Nehru Technological University, Hyderabad  
  (Expected Graduation: 2025)  
  CGPA: 8.5 / 10
`;

const projects = `
- **AI Resume Builder**  
  Developed a full-stack web app using MERN + AI that auto-generates resume content and formats it dynamically.  

- **Task & Habit Tracker**  
  Created a productivity platform with streak analytics and habit insights using MongoDB Aggregation Pipelines.
`;

const certifications = `
- JavaScript (HackerRank)  
- MongoDB for Developers (MongoDB University)
`;

const jobDescription = `
We are looking for a Full Stack Developer skilled in React.js, Node.js, and MongoDB.  
The candidate should be able to build RESTful APIs, handle authentication, and deploy scalable applications.  
Knowledge of cloud hosting and modern CI/CD practices is a plus.
`;


    const prompt=`
You are a professional resume formatter and LaTeX document designer.

Generate a complete resume written in **valid LaTeX code**, ready to compile directly in Overleaf or any LaTeX compiler.
Use the "article" class and simple packages only (geometry, parskip, enumitem, hyperref). 
The LaTeX code must be syntactically correct and produce a clean, single-page PDF.

Do not return Markdown or explanations — only return the LaTeX source code.

Use the following user data to create the resume:

Name: ${name}
Title/Role: ${title}
Email: ${email}
Phone: ${phone}
Location: ${location}
LinkedIn: ${linkedin}
Portfolio/Website: ${website}

Professional Summary:
${summary}

Skills:
${skills}

Experience:
${experience}

Education:
${education}

Projects:
${projects}

Certifications:
${certifications}

Formatting rules:
- Use clear section headers (e.g., \\section*{Skills}, \\section*{Experience})
- Use \\begin{itemize} ... \\end{itemize} for bullet points.
- Keep font size 10pt, A4 paper size, and 0.8-inch margins.
- Center the name and contact info at the top.
- Do not use color, fancy fonts, or complex templates.
- Keep it minimal and ATS-friendly.
- Escape all LaTeX special characters automatically so the document compiles safely.
- Return **only** valid LaTeX — no commentary or Markdown formatting.

Output example (structure only, do not repeat this explanation):
\\documentclass[a4paper,10pt]{article}
... full LaTeX code ...
\\end{document}
`;

    const openRouter = new OpenRouter({
  apiKey: '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',
  
});
const response = await openRouter.chat.send({
  model: 'kwaipilot/kat-coder-pro:free',
  messages: [
    {
      role: 'user',
      content: prompt,
    },
  ],
  stream: false,
});

console.log(response.choices[0].message.content)

const saveresume = await resumemodel.create({
  latexContent:response.choices[0].message.content
})

console.log("resume saved to the db ");



 await res.send(response)
}








