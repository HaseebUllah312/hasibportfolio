export interface Certificate {
  title: string;
  pdf?: string; // path to PDF in public/certificates (optional)
  image?: string; // path to image in public/certificates (preferred)
  thumbnail?: string; // optional image preview
}

export const certificates: Certificate[] = [
  {
    title: "Cisco Certified Support Technician Cybersecurity",
    image: "/certificates/cisco_cybersecurity.png"
  },
  {
    title: "AutoCAD",
    image: "/certificates/autocad.png",
    pdf: "/certificates/Autocad Haseeb Ullah.pdf"
  },
  {
    title: "C++ Certificate 1",
    image: "/certificates/C++ 1.jpg"
  },
  {
    title: "C++ Certificate (Cisco)",
    image: "/certificates/c++ cisco.png",
    pdf: "/certificates/C++ cisco.pdf"
  },
  {
    title: "Web Design with HTML & CSS",
    image: "/certificates/Designing a website using html and css.jpg"
  },
  {
    title: "Digital Marketing",
    image: "/certificates/digital marketing .png"
  },
  {
    title: "Freelancing",
    image: "/certificates/freelancing.png"
  },
  {
    title: "Graphic Design",
    image: "/certificates/graphic design.png"
  },
  {
    title: "HTML and CSS",
    image: "/certificates/HTMl and CSS.jpg"
  },
  {
    title: "MS Word",
    image: "/certificates/MS word.jpg"
  },
  {
    title: "Networking",
    image: "/certificates/networks.png",
    pdf: "/certificates/Networking.pdf"
  },
  {
    title: "Python (Beginner)",
    image: "/certificates/Python beginner.jpg"
  },
  {
    title: "Python (Intermediate)",
    image: "/certificates/Python internediate.jpg"
  },
  {
    title: "SQL",
    image: "/certificates/SQL.jpg"
  },
  {
    title: "Video Editing",
    image: "/certificates/video editing.png",
    pdf: "/certificates/Video editing haseeb.pdf"
  },
  {
    title: "App Development",
    image: "/certificates/app development.jpg"
  },
  {
    title: "Java",
    image: "/certificates/java.jpg"
  },
  {
    title: "Spark Machine Learning Project",
    image: "/certificates/spark machine learning project.jpg"
  },
  {
    title: "Practical Help Desk",
    image: "/certificates/IT support.jpeg"
  }
];
