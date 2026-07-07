import jsPDF from 'jspdf';

const generateCV = () => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  let yPosition = 15;
  const lineHeight = 6;
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;

  // Helper function to add text with wrapping
  const addWrappedText = (text, x, y, maxWidth, fontSize = 10, color = [0, 0, 0]) => {
    pdf.setFontSize(fontSize);
    pdf.setTextColor(color[0], color[1], color[2]);
    const lines = pdf.splitTextToSize(text, maxWidth);
    pdf.text(lines, x, y);
    return lines.length * lineHeight;
  };

  const addSectionTitle = (title) => {
    pdf.setFontSize(13);
    pdf.setTextColor(14, 165, 233); // primary-500 color
    pdf.setFont('helvetica', 'bold');
    yPosition += 3;
    pdf.text(title, margin, yPosition);
    yPosition += 8;
    pdf.setDrawColor(14, 165, 233);
    pdf.line(margin, yPosition - 2, pageWidth - margin, yPosition - 2);
    yPosition += 3;
  };

  const checkPageBreak = (minSpace = 20) => {
    if (yPosition + minSpace > pageHeight - 10) {
      pdf.addPage();
      yPosition = 15;
    }
  };

  // Header - Personal Details
  pdf.setFontSize(20);
  pdf.setTextColor(0, 0, 0);
  pdf.setFont('helvetica', 'bold');
  pdf.text('ASHAOLU Olaitan Solomon', margin, yPosition);
  yPosition += 10;

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(100, 100, 100);
  const contactInfo = 'Full Stack Developer | PHP | Laravel | React | MySQL\n📧 ashaoluolaitan@gmail.com | 📱 +234 (0) 703 585 8977 | 📱 +234 (0) 811 458 0007';
  yPosition += addWrappedText(contactInfo, margin, yPosition, contentWidth, 9);
  yPosition += 2;

  // Professional Summary
  addSectionTitle('PROFESSIONAL SUMMARY');
  checkPageBreak(15);
  const summary = 'Dedicated software developer with expertise in full-stack web development. Proficient in PHP backend development (Laravel framework), MySQL database management, and modern frontend technologies (React, HTML, CSS, JavaScript). Experienced in developing and implementing web applications, result management systems, and database solutions. Strong track record of delivering quality projects on time with excellent communication skills.';
  yPosition += addWrappedText(summary, margin, yPosition, contentWidth, 9);
  yPosition += 5;

  // Education
  addSectionTitle('EDUCATION & QUALIFICATIONS');
  checkPageBreak(25);

  const education = [
    {
      title: 'M.Sc. Software Engineering',
      institution: 'Nasarawa State University, Keffi',
      year: 'In Progress'
    },
    {
      title: 'B.Sc. Computer Science',
      institution: 'Ajayi Crowther University, Oyo',
      year: '2011 - 2015'
    },
    {
      title: 'Certificate in Computing with Database Applications',
      institution: 'Kwara Resource Center, Ilorin',
      year: '2015'
    },
    {
      title: 'NYSC Certificate',
      institution: 'National Youth Service Corps',
      year: '2016'
    },
    {
      title: 'Senior School Certificate Examination (SSCE)',
      institution: 'St Joseph\'s College, Vom',
      year: '2009'
    },
    {
      title: 'Primary School Leaving Certificate',
      institution: 'NVRI Staff School, Vom',
      year: '2002'
    }
  ];

  education.forEach((edu) => {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text(edu.title, margin, yPosition);
    yPosition += 5;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(80, 80, 80);
    pdf.text(edu.institution, margin + 3, yPosition);
    yPosition += 4;
    pdf.text(edu.year, margin + 3, yPosition);
    yPosition += 6;
    checkPageBreak(20);
  });

  // Professional Experience
  addSectionTitle('PROFESSIONAL EXPERIENCE');
  checkPageBreak(25);

  const experience = [
    {
      position: 'Lecturer/Tutor',
      institution: 'Plateau State Polytechnic Barkin Ladi & Federal College of Animal Health and Production Tech.',
      period: '2016 - Present',
      responsibilities: [
        'Teaching computer science and related subjects',
        'Developing and implementing web-based systems',
        'Mentoring students on web development projects'
      ]
    },
    {
      position: 'Web Developer',
      institution: 'Adak Farms and Milling Industry, Abuja',
      period: '2015',
      responsibilities: [
        'Developed records management system',
        'Database design and implementation',
        'Backend development and optimization'
      ]
    },
    {
      position: 'Development Consultant',
      institution: 'Kwara Resource Center, Ilorin',
      period: '2015',
      responsibilities: [
        'System analysis and design',
        'Technical consulting',
        'Database applications development'
      ]
    }
  ];

  experience.forEach((exp) => {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text(exp.position, margin, yPosition);
    yPosition += 5;

    pdf.setFont('helvetica', 'italic');
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text(exp.institution, margin + 3, yPosition);
    yPosition += 4;
    pdf.text(exp.period, margin + 3, yPosition);
    yPosition += 5;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(80, 80, 80);
    exp.responsibilities.forEach((resp) => {
      yPosition += addWrappedText(`• ${resp}`, margin + 5, yPosition, contentWidth - 5, 9);
    });
    yPosition += 3;
    checkPageBreak(25);
  });

  // Projects
  addSectionTitle('KEY PROJECTS');
  checkPageBreak(25);

  const projects = [
    {
      name: 'Journal Publication Websites',
      description: 'Designed and developed multiple academic journal publication platforms with peer review systems, manuscript submission workflows, and editorial management interfaces. Implemented secure authentication, database-driven article storage, and professional journal management systems.'
    },
    {
      name: 'Result Calculating System',
      description: 'Developed and implemented a comprehensive result management system for Computer Science and Electrical Engineering Departments at Federal College of Animal Health & Production Technology'
    },
    {
      name: 'Federal College Website',
      description: 'Designed and developed professional website for Federal College of Animal Health & Production Technology Vom with modern UI/UX'
    },
    {
      name: 'Project Proposal Management System',
      description: 'Created standardized project proposal format and management system for Computer Science Department'
    },
    {
      name: 'Records Management System',
      description: 'Developed database-driven records management solution for ADAK Farms and Milling Industry Abuja'
    },
    {
      name: 'World Christian Medical Mission Website',
      description: 'Built professional website for World Christian Medical Mission Nigeria'
    }
  ];

  projects.forEach((proj) => {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`• ${proj.name}`, margin, yPosition);
    yPosition += 5;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(80, 80, 80);
    yPosition += addWrappedText(proj.description, margin + 5, yPosition, contentWidth - 5, 9);
    yPosition += 4;
    checkPageBreak(15);
  });

  // Technical Skills
  addSectionTitle('TECHNICAL SKILLS');
  checkPageBreak(20);

  const skillCategories = [
    {
      category: 'Backend Development',
      skills: 'PHP, Laravel, Node.js, REST APIs, Database Design & Optimization'
    },
    {
      category: 'Frontend Development',
      skills: 'React, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, TypeScript'
    },
    {
      category: 'Databases',
      skills: 'MySQL, PostgreSQL, MongoDB'
    },
    {
      category: 'Tools & Technologies',
      skills: 'Git, Docker, AWS, Figma, VS Code, Cursor, WindSurf'
    },
    {
      category: 'Other Skills',
      skills: 'System Analysis & Design, Web Application Development, Database Administration'
    }
  ];

  skillCategories.forEach((skill) => {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    pdf.text(skill.category, margin, yPosition);
    yPosition += 5;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(80, 80, 80);
    yPosition += addWrappedText(skill.skills, margin + 3, yPosition, contentWidth - 3, 9);
    yPosition += 4;
    checkPageBreak(15);
  });

  // Personal Skills
  addSectionTitle('PERSONAL ATTRIBUTES');
  checkPageBreak(15);

  const personalSkills = [
    'Strong verbal presentation and communication skills',
    'Proven ability to work under pressure and meet tight deadlines',
    'Excellent interpersonal and teamwork abilities',
    'Proactive approach to continuous self-improvement and learning',
    'Detail-oriented with strong problem-solving capabilities'
  ];

  personalSkills.forEach((skill) => {
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(80, 80, 80);
    yPosition += addWrappedText(`• ${skill}`, margin, yPosition, contentWidth, 9);
    yPosition += 2;
  });

  // Footer
  yPosition = pageHeight - 15;
  pdf.setFontSize(8);
  pdf.setTextColor(150, 150, 150);
  pdf.setFont('helvetica', 'italic');
  const pageCount = pdf.internal.pages.length - 1;
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    pdf.text(
      `Page ${i} of ${pageCount}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  pdf.save('ASHAOLU_Olaitan_CV.pdf');
};

export default generateCV;
