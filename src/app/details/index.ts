import { StaticImageData } from 'next/image';
import project1 from "./projects/predictingMinerals.png";
import project2 from "./projects/u-net.png";
import project3 from "./projects/as-river.png";
import project4 from "./projects/resturant_locator.png";
import project5 from "./projects/erigeodatabase.jpg";


export const Position : string = `Web. Dev | Geospatial Data Science`;

export const ABOUT_TEXT: string = `I am a Geospatial and GIS analyst with a background in
              geology and hands-on experience in website development and spatial data
              analysis. Skilled in managing complex geospatial datasets and
              developing interactive web-based GIS platforms. Proficient in Python, and SQL with extensive
              knowledge of GIS tools such as QGIS, ArcGIS, FME Form and
              Geoserver. Always eager to tackle new challenges and expand my
              skills in geospatial technology.`;

interface Experience  {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}
export const EXPERIENCES: Experience [] = [
  {
    year: "2021 - 2023",
    role: "GIS Analyst | Exploration Geologist",
    company: "Zara Mining Sh. Co.",
    description: `Managed geological, geophysical, and geochemical exploration data. Responsible for creating and updating all spatial layers and related information. Managed RC and diamond drill data, including creating profiles, sections, and advanced maps. Prepared a seamless web dashboard that integrates multiple data sources.`,
    technologies: ["ArcGIS Pro", "GeoDjango", "Geoserver", "PostgreSQL"],
  },
  {
    year: "2019 - 2021",
    role: "GIS Analyst",
    company: "Ministry of Energy and Mines",
    description: `As a Geospatial Data Specialist, responsibilities included creating, maintaining, and updating spatial databases. The role involved performing remote sensing tasks such as processing satellite images, as well as developing, editing, and updating spatial and hydrometeorological data using GPS and digitization techniques with satellite imagery. Additionally, historical geological maps were georeferenced with modern geospatial data to enhance analysis and visualization.`,
    technologies: [
      "QGIS",
      "PostgreSQL",
      "Geoserver",
      "AutoCAD",
      "ERDAS IMAGINE",
    ],
  },
];

interface Project {
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  links: string;
}

export const PROJECTS: Project[] = [
  {
    title:
      "Predicting Mineral Anomalies using ASTER and Sentinel-2 data in Eritrea (Thesis)",
    image: project1,
    description:
      "Enhanced mineral detection using band ratioing and PCA, visualized mineral distributions with RGB band composition, and applied SMOTE and undersampling techniques. Developed and trained machine learning models (Random Forest and SVM) to predict mineral occurrences.",
    technologies: [
      "ArcGIS Pro",
      "QGIS",
      "TensorFlow",
      "Google Earth Engine",
      "Git",
    ],
    links:
      "https://github.com/SirakMario/Predicting-Mineral-Anomalies-using-ASTER-and-Sentinel-2-data-in-Adobha-Eritrea",
  },
  {
    title: "Land Cover Classification from Aerial Image Using U-net in Poland",
    image: project2,
    description:
      "Developing a U-Net model for accurate land cover classification, with a focus on evaluating the model's performance both with and without data augmentation.",
    technologies: ["QGIS", "Python", "TensorFlow", "Git"],
    links: "https://github.com/SirakMario/Landcover_Classification",
  },
  {
    title: "Aa River - Web Portal",
    image: project3,
    description:
      "Implemented an interactive dashboard for Aa River data, featuring 2D and 3D visualizations, including LiDAR point clouds and multispectral images. Deployed the solution on a virtual machine running Windows Server.",
    technologies: ["Geoserver", "PostgreSQL", "leafletjs", "Three.js", "Git"],
    links: "https://github.com/SirakMario/Aa-River---Web-Portal",
  },
  {
    title: "Restaurant Finder",
    image: project4,
    description:
      "Developed a full-stack web application using Django to serve a REST API with Bootstrap 5 for the front end. Implemented ETL processes to extract, transform, and load restaurant data from the Google API into PostgreSQL. Enabled CRUD operations for user reviews and integrated interactive maps for navigation and route guidance. Used Docker for containerization and deployment.",
    technologies: ["ETL", "Django", "Docker", "PostgreSQL", "Leafletjs", "Git"],
    links: "https://github.com/SirakMario/Restaurant_Finder",
  },
  {
    title: "Eritrean Geological Survey Webdatabase",
    image: project5,
    description:
      "Developed a centralized web platform for managing geochemistry, geophysics, and map data. Implemented a security system with user account verification and enabled integration with GIS tools for data visualization, editing, and export. Optimized search queries and provided a summary view of geospatial data.",
    technologies: ["Django", "Geoserver", "PostgreSQL"],
    links: ""
  },
];

interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export const CONTACT: Contact[] = [{
  address: "Münster, Germany",
  phoneNo: "+491785816336",
  email: "sirak.nafu@gmail.com",
}];
