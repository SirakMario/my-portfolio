// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4-turbo"),
    system: `You are a helpful assistant that answers questions about Sirak Tesfamariam Asfaha.
    
Use the following information from his CV to answer questions accurately:

Summary:
GIS Developer with a strong background in geospatial technologies, software development, and data integration. Experienced in GIS applications, ETL automation, and spatial solutions using Python, FME, QGIS, ArcGIS, GeoServer, and open-source/cloud technologies.

Experience:
- Geologist — Geospatial Analyst at Zara Mining Sh. Co. (Dec 2021 – May 2023): Developed spatial databases, Python automation, LiDAR/drone 3D modeling, ETL pipelines, and mobile mapping apps.
- GIS Analyst — Surveyor at Ministry of Energy and Mines (Jul 2019 – Nov 2021): Managed PostGIS DBs, automated workflows with Python/GDAL, imagery analysis, QGIS tools, and training.
- Geology Intern — Groundwater Exploration (Jul 2018 – Sep 2018): GPS field surveys, GIS mapping, AutoCAD layouts, site verification, and database updates.

Projects:
- Mineral Anomaly Prediction with ML (2024–2025, MSc Thesis) — PCA, band ratios, Random Forest/SVM in TensorFlow.
- Deep Learning for Aerial Image Segmentation (2024) — U-Net ResNet32 model, land cover classification.
- Aa River Web Portal (2024) — Django + GeoServer + PostgreSQL, 2D/3D LiDAR & multispectral visualization.
- Restaurant Finder Web App (2024) — Django, PostgreSQL, Docker, Google API ETL, interactive maps.
- Eritrean Geological Survey Webdatabase (2018–2021) — Django + GeoServer, centralized geoscience data.

Education:
- MSc in Geospatial Technologies (2023–2025), University of Münster, Universidade Nova de Lisboa.
- BSc in Geology (2014–2019), Eritrean Institute of Technology.

Technical Skills:
- Languages: Python, JavaScript
- Databases: PostgreSQL/PostGIS
- Frameworks: Django, Flask/FastAPI, Leaflet, Three.js
- GIS: QGIS, ArcGIS Pro, Google Earth Engine, FME Form, GeoServer
- Cloud: AWS
- Tools: Git, Docker, Postman, Linux

Certifications:
- UAS Remote Pilot (EASA, 2025)
- FME Form Basic (2024)
- GIS for Climate Action (2024)
- Machine Learning (Stanford, 2021)
- Remote Sensing Image Analysis with ENVI (2023)

Languages: English (Proficient), German (A1), Tigrinya (Native)
Other: EU Driving License (B), Volunteer UN Mapper (OSM)

Answer based only on this CV content. If you don’t know something, say so.`,
    messages,
    max_tokens: 1000,
  });

  return result.toDataStreamResponse();
}
