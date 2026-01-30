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
      name: "Dr Rohit Jain",
      titles: [
        "Gastroenterologist |Gall Bladder | Pancreas | Esophagus| Liver |ERCP | Best Surgeon"
      ],
      photoUrl: "https://drive.google.com/uc?id=12hfAzCuk25QXne1eF3w5sfqHU1HWX9Ri",
    },
    contact: {
      addresses: [
        {
            location: "Acrux medical store , subhash complex, chowk, Lucknow",
            timing: "Mon- saturday- 4 to 6 pm"
        },
        {
            location: "Jinendra clinic, pani ki tanki, Ranibagh,Lalitpur (UP)",
            timing: "Every 4th Sunday ( 10 to 2pm)"
        }
      ],
      phone: ["+91 87073 82999"],
      email: "rohitjaindr24@gmail.com",
    },
    about: {
      bio: [
        "Dr. Rohit Jain is a highly skilled Gastrointestinal and Hepatobiliary, Liver and intestinal Surgeon with over 11 years of extensive experience in advanced surgical gastroenterology.",
        "He is providing advanced treatment for gall bladder stones, bile duct stones, pancreatitis, pancreatic diseases, liver and stomach surgery, and intestinal obstruction.",
        "He specializes in laparoscopic gall bladder surgery, ERCP for bile duct stones, management of acute and chronic pancreatitis, and pancreatic cancer surgery.Known for his clinical precision, academic excellence, and patient-centric approach, he has managed a wide spectrum of complex gastrointestinal, hepatobiliary, and pancreatic disorders, including high-risk and referral cases from across India.",
        "Dr. Jain completed his MBBS from the prestigious Government Stanley Medical College, Chennai (2007 batch), laying a strong foundation in clinical medicine and surgery. He subsequently pursued post-graduation (MS – General Surgery) from MLB Medical College, Jhansi, where he developed strong operative skills and surgical judgment.",
        "With a keen interest in advanced gastrointestinal surgery, Dr. Jain undertook super-specialty training (MCh) in Gastrointestinal Surgery from King George’s Medical University (KGMU), Lucknow . His training at one of India’s premier academic institutions provided him with in-depth exposure to complex GI, hepatobiliary, pancreatic, and colorectal surgeries.",
        "Dr. Jain possesses extensive expertise in diagnostic and therapeutic endoscopy, having performed over 10,000 diagnostic endoscopic procedures, including upper GI endoscopy and colonoscopy. His advanced endoscopic experience includes more than 300 ERCP procedures, along with specialized interventions such as POEM (Per-Oral Endoscopic Myotomy) and ESD (Endoscopic Submucosal Dissection).",
        "In addition to endoscopy, Dr. Jain has actively participated in multiple liver transplantation procedures, including both Living Donor Liver Transplantation (LDLT) and Deceased Donor Liver Transplantation (DDLT), contributing to perioperative and surgical management.",
        "His professional journey includes 5 years of experience at Dr. Ram Manohar Lohia Hospital, New Delhi, and 5 years at King George’s Medical University, Lucknow, where he managed complex tertiary-care referrals and trained junior surgeons.",
        "Dr. Jain has successfully performed and assisted in a wide range of advanced and complex surgeries, including:",
        "- Esophagectomy",
        "- Colorectal surgeries",
        "- Hepatectomy",
        "- Biliary surgeries",
        "- Pancreatectomy",
        "- Splenectomy",
        "These procedures have been performed for both benign and malignant conditions, often in high-risk and referred patients.",
        "Academically inclined, Dr. Jain has multiple publications in national and international peer-reviewed journals, reflecting his commitment to research, evidence-based practice, and continuous academic growth.",
        "With a blend of advanced surgical expertise, vast endoscopic experience, and a compassionate approach to patient care, Dr. Rohit Jain continues to be a trusted name in the field of Surgical Gastroenterology."
      ]
    },
    experience: [
      {
        role: "Assistant Professor",
        department: "Department of Surgical Gastroenterology",
        institution: "King George Medical University, Lucknow",
        icon: Briefcase,
      },
      {
        role: "Senior Resident (MCh – Surgical Gastroenterology)",
        institution: "King George Medical University, Lucknow",
        icon: Briefcase,
      },
      {
        role: "Senior Resident – General Surgery",
        institution: "RML Hospital, New Delhi",
        description: "Worked as Senior Resident in the Department of General Surgery, RML Hospital, New Delhi.",
        icon: Briefcase,
      },
    ],
    education: [
      {
        degree: "MCh – Surgical Gastroenterology",
        institution: "King George’s Medical University, Lucknow",
        icon: GraduationCap,
      },
      {
        degree: "MS – General Surgery (Junior Resident)",
        institution: "MLB Medical College, Jhansi (UP)",
        icon: GraduationCap,
      },
      {
        degree: "MBBS",
        institution: "Govt. Stanley Medical College, Chennai",
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
        journal: "",
        title: "Clinical Outcome and Quality of Life After Frey’s Procedure and Longitudinal Pancreaticojejunostomy for Chronic Pancreatitis",
        pmid: "41172133",
        icon: BookOpen,
      },
      {
        journal: "Annals of Coloproctology",
        title: "Feasibility of the CLAP Procedure in Laparoscopic Right Hemicolectomy for Ileocecal Tuberculosis",
        icon: BookOpen,
      },
      {
        journal: "Techniques in Coloproctology",
        title: "Laparoscopic Total Extraperitoneal Anterior Rectopexy (L-TEAR) – A Preliminary Report",
        icon: BookOpen,
      },
    ],
    research: [
      {
        name: "Elobixibat Study – Chronic Constipation",
        organization: "Dr. Reddy’s Laboratories",
        icon: FlaskConical,
      },
      {
        name: "ABX464 Phase III Study – Ulcerative Colitis",
        organization: "",
        icon: FlaskConical,
      },
      {
        name: "Addaven Phase IV Study – Parenteral Nutrition",
        organization: "",
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
      { skill: "Assisted in: Living Donor Liver Transplants", icon: ShieldCheck },
      { skill: "Assisted in: Deceased Donor Liver Transplants", icon: ShieldCheck },
    ],
    reviews: [
      {
      name: "Anita Sharma",
      role: "Post Liver Surgery Patient",
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg",
      videoId: "VIDEO_ID_1",
      quote:
      "Dr. Rohit Jain explained everything patiently. The surgery and recovery were smooth and reassuring.",
      },
      {
      name: "Rajiv Mehta",
      role: "GI Procedure Patient",
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg",
      videoId: "VIDEO_ID_2",
      quote:
      "Highly professional and empathetic. I felt confident and safe throughout the treatment.",
      },
      {
      name: "Sunita Verma",
      role: "Endoscopy Patient",
      thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg",
      videoId: "VIDEO_ID_3",
      quote:
      "Clear communication, modern facilities, and excellent post-procedure care.",
      },
      ],
  };
  