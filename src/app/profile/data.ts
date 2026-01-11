import {
    Briefcase,
    GraduationCap,
    Award,
    Presentation,
    Mic,
    FlaskConical,
    BookOpen,
    BookMarked,
    ShieldCheck,
    Wrench,
  } from 'lucide-react';
  
  export const profileData = {
    personal: {
      name: "Dr. Rohit Jain",
      sex: "Male",
      dob: "13/02/1987",
      photoUrl: "https://drive.google.com/uc?id=12hfAzCuk25QXne1eF3w5sfqHU1HWX9Ri",
    },
    contact: {
      address: "502, Saroj Sadan, Naibasti, Gandhi Nagar, Lalitpur, Uttar Pradesh – 284403",
      phone: ["+91 99564 85599", "+91 87073 82999"],
      email: "drrohitjain1302@gmail.com",
    },
    about: {
      quote: "I am working towards becoming a good surgical gastroenterologist.",
      interests: [
        "Hepatobiliary surgeries",
        "Colorectal surgeries",
        "Minimally invasive surgeries including Advanced Laparoscopic surgery",
        "Liver transplant surgeries",
      ],
    },
    experience: [
      {
        role: "Assistant Professor",
        department: "Department of Surgical Gastroenterology",
        institution: "King George Medical University, Lucknow",
        period: "2nd Jan 2024 – Present",
        icon: Briefcase,
      },
      {
        role: "Senior Resident (MCh – Surgical Gastroenterology)",
        institution: "King George Medical University, Lucknow",
        period: "17th Dec 2020 – 16th Dec 2023",
        icon: Briefcase,
      },
      {
        role: "Senior Resident – General Surgery",
        institution: "RML Hospital, New Delhi",
        period: "Nov 2017 – Nov 2020",
        description: "Worked as Senior Resident in the Department of General Surgery, RML Hospital, New Delhi.",
        icon: Briefcase,
      },
    ],
    education: [
      {
        degree: "MCh – Surgical Gastroenterology",
        institution: "King George’s Medical University, Lucknow",
        period: "Dec 2020 – Dec 2023",
        icon: GraduationCap,
      },
      {
        degree: "MS – General Surgery (Junior Resident)",
        institution: "MLB Medical College, Jhansi (UP)",
        period: "June 2014 – June 2017",
        icon: GraduationCap,
      },
      {
        degree: "MBBS",
        institution: "Govt. Stanley Medical College, Chennai",
        period: "Aug 2007 – March 2013",
        icon: GraduationCap,
      },
    ],
    registration: [
      { council: "Tamil Nadu Medical Council", number: "103401" },
      { council: "UP Medical Council", number: "116415" },
    ],
    memberships: [
      { name: "Association of Surgeons of India (ASI)", icon: Award },
    ],
    conferences: [
      { name: "IASGCON 2022 – 32nd National Conference (Delegate)", icon: Mic },
      { name: "Endoswiss 2023 Live", icon: Mic },
      { name: "9th Biennial Congress – Asian-Pacific HPB Association 2023", icon: Mic },
      { name: "UPISGCON 2023 – Hyatt Regency (Oct 7–8, 2023)", icon: Mic },
      { name: "Indian Pancreas Club – July 19–21, 2024 (AIG Hospital, Hyderabad)", icon: Mic },
      { name: "AIG LIVE 2024 – Sept 19–21, Hyderabad", icon: Mic },
    ],
    workshops: [
      {
        name: "Vascular Anastomosis Workshop – 9th Biennial Congress of the Asian-Pacific Hepato-Pancreato-Biliary Association 2023",
        icon: Wrench,
      },
    ],
    papers: [
      {
        type: "Poster – IASGCON 2022",
        title: "Results of Pancreaticogastrostomy in High-Risk Pancreatoduodenectomy Cases – Observational Study",
        icon: Presentation,
      },
      {
        type: "Best Paper Category – APHPBA 2023",
        title: "Heterodimerization of CCK1 and CCK2 receptors in gallbladder cancer: a new mechanism for carcinogenesis",
        icon: Presentation,
      },
      {
        type: "Paper – APHPBA 2023",
        title: "Results of Pancreaticogastrostomy in High-Risk Pancreatoduodenectomy Cases – Observational Study",
        icon: Presentation,
      },
    ],
    publications: [
      {
        journal: "Pancreas (2025)",
        title: "Clinical Outcome and Quality of Life After Frey’s Procedure and Longitudinal Pancreaticojejunostomy for Chronic Pancreatitis",
        pmid: "41172133",
        icon: BookOpen,
      },
      {
        journal: "Annals of Coloproctology (2025 – Accepted)",
        title: "Feasibility of the CLAP Procedure in Laparoscopic Right Hemicolectomy for Ileocecal Tuberculosis",
        icon: BookOpen,
      },
      {
        journal: "Techniques in Coloproctology (2025 – Accepted)",
        title: "Laparoscopic Total Extraperitoneal Anterior Rectopexy (L-TEAR) – A Preliminary Report",
        icon: BookOpen,
      },
    ],
    research: [
      {
        name: "Elobixibat Study – Chronic Constipation",
        organization: "Dr. Reddy’s Laboratories",
        period: "2023 – Present",
        icon: FlaskConical,
      },
      {
        name: "ABX464 Phase III Study – Ulcerative Colitis",
        organization: "",
        period: "2024 – Present",
        icon: FlaskConical,
      },
      {
        name: "Addaven Phase IV Study – Parenteral Nutrition",
        organization: "",
        period: "Dec 2025 – Present",
        icon: FlaskConical,
      },
    ],
    thesis: [
      {
        degree: "MCh Thesis",
        title: "Prospective analysis of preoperative assessment of duodenal involvement in gallbladder cancer",
        icon: BookMarked,
      },
      {
        degree: "MS Thesis",
        title: "Comparative study of laparoscopic vs open ventral hernia repair",
        icon: BookMarked,
      },
    ],
    skills: [
      { skill: "Open & advanced laparoscopic GI surgeries (benign & malignant)", icon: ShieldCheck },
      { skill: "Upper GI endoscopy & colonoscopy", icon: ShieldCheck },
      { skill: "Therapeutic ERCP", icon: ShieldCheck },
      { skill: "Assisted in: 26 Living Donor Liver Transplants", icon: ShieldCheck },
      { skill: "Assisted in: 6 Deceased Donor Liver Transplants", icon: ShieldCheck },
    ],
  };
  