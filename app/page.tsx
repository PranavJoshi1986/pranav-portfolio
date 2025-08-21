"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
  ArrowRight,
  Globe,
  MapPin,
  Calendar,
  Briefcase,
  Code2,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/** ---------- EASY-EDIT CONTENT ---------- */
const PROFILE = {
  name: "Pranav Joshi",
  role: "Senior Scientist · Organoids & 3D Bioprinting",
  tagline:
    "I build high-throughput organoid models and translational assays on pillar/perfusion platforms to accelerate drug discovery.",
  location: "Fort Worth, TX, USA",
  email: "pranav.mtn@gmail.com",
  resumeUrl: "/Pranav_Joshi_CV.pdf",
  headshot:
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pranav-joshi-350b4b89/", Icon: Linkedin },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=sfYx8TwAAAAJ", Icon: ExternalLink },
    { label: "ResearchGate", href: "https://www.researchgate.net/profile/Pranav-Joshi-9", Icon: ExternalLink },
    { label: "NIH Bibliography", href: "https://www.ncbi.nlm.nih.gov/myncbi/pranav.joshi.1/bibliography/public/", Icon: BookOpen },
  ],
};

const PROJECTS = [
  {
    title: "Pillar/Perfusion Plate for Robust Human Organoids",
    description:
      "Led development and commercialization of 36/144/384PillarPlate formats and perfusion plates, enabling scalable and reproducible organoid culture for HTS.",
    tags: ["Organoids", "HTS", "Pillar/Perfusion"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    links: [{ label: "Publication", href: "https://pubmed.ncbi.nlm.nih.gov/36993405/", Icon: ExternalLink }],
  },
  {
    title: "Dynamic Culture of Cerebral Organoids",
    description:
      "Perfusion protocols reduced necrotic core formation and improved maturation, supporting neurotoxicity applications.",
    tags: ["Brain Organoids", "Perfusion", "Neurotox"],
    image:
      "https://images.unsplash.com/photo-1581091870622-7c74bff9a5bd?q=80&w=1200&auto=format&fit=crop",
    links: [{ label: "Preprint", href: "https://www.biorxiv.org/content/10.1101/2024.03.25.586638v1", Icon: ExternalLink }],
  },
  {
    title: "Bioprinted Liver Tumor Spheroids for Drug Screening",
    description:
      "Dynamic culture workflow of bioprinted HCC spheroids for predictive anticancer drug screening.",
    tags: ["Liver Tumor", "3D Bioprinting", "Drug Screening"],
    image:
      "https://images.unsplash.com/photo-1582719478250-04d3d3e5d6cb?q=80&w=1200&auto=format&fit=crop",
    links: [{ label: "Article", href: "https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/bit.28924", Icon: ExternalLink }],
  },
];

const EXPERIENCE = [
  {
    role: "Senior Scientist, Product Development Manager",
    company: "Bioprinting Laboratories Inc.",
    period: "2020 – Present",
    location: "Dallas–Fort Worth, TX",
    bullets: [
      "Directed commercialization of organoid culture platforms (36/144/384PillarPlate, PerfusionPlate).",
      "Applied Lean Startup to reduce R&D costs by 25% and increase reproducibility by 40%.",
      "Authored technical documentation, SOPs, and validation protocols aligned with ISO and FDA standards.",
      "Led NIH SBIR and industry projects on organoid-based screening and disease modeling.",
    ],
  },
  {
    role: "Postdoctoral Scientist",
    company: "Bioprinting Laboratories Inc.",
    period: "2019 – 2020",
    location: "Cleveland, OH",
    bullets: [
      "Developed co-culture models for metabolism-mediated neurotoxicity.",
      "Standardized assay-ready brain organoids in 384PillarPlate.",
    ],
  },
  {
    role: "Graduate Research Associate",
    company: "Cleveland State University / Bioprinting Labs",
    period: "2014 – 2019",
    location: "Cleveland, OH",
    bullets: [
      "Established HTS neural stem cell model for developmental neurotoxicity (NIH R01).",
      "Engineered lentiviral biosensor assays and high-content imaging SOPs.",
    ],
  },
];

const SKILLS = [
  "Product Development & Commercialization",
  "3D Bioprinting",
  "Organoid Culture (Brain/Liver/Cardiac)",
  "High-Throughput Screening (HTS)",
  "Pillar/Perfusion Platforms",
  "Assay Development",
  "High-Content Imaging",
  "Electrophysiology (MEA)",
  "NIH SBIR/Grant Writing",
];

const PUBLICATIONS = [
  { title: "Dynamic perfusion enhances maturation of cerebral organoids", source: "bioRxiv, 2024", link: "https://www.biorxiv.org/content/10.1101/2024.03.25.586638v1" },
  { title: "Dynamic culture of liver tumor spheroids for predictive anticancer drug screening", source: "Biotechnology & Bioengineering, 2025", link: "https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/abs/10.1002/bit.28924" },
  { title: "Pillar/perfusion plate platform for robust human organoid culture", source: "ACS Biomaterials Sci Eng, 2024", link: "https://pubmed.ncbi.nlm.nih.gov/36993405/" },
];

/** ---------- UI HELPERS ---------- */
const container = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";
const sectionTitle = (t: string) => (
  <motion.h2
    className="text-2xl sm:text-3xl font-semibold tracking-tight"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {t}
  </motion.h2>
);

function useThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

/** ---------- PAGE COMPONENT (DEFAULT EXPORT) ---------- */
export default function Page() {
  const { dark, setDark } = useThemeToggle();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur bg-white/70 dark:bg-slate-950/70">
        <div className={`${container} py-3 flex items-center justify-between`}>
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <nav className="hidden sm:flex gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#publications" className="hover:underline">Publications</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="icon" aria-label="Toggle theme" onClick={() => setDark(!dark)} className="rounded-2xl">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <a href={PROFILE.resumeUrl} className="hidden sm:inline-block">
              <Button className="rounded-2xl"><Download className="h-4 w-4 mr-2" /> Resume</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="border-b border-slate-200/60 dark:border-slate-800/60">
        <div className={`${container} py-14 sm:py-20 grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center`}>
          <div>
            <motion.h1
              className="text-3xl sm:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {PROFILE.role}
            </motion.h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl">
              {PROFILE.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {PROFILE.socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="rounded-2xl">
                    <Icon className="h-4 w-4 mr-2" /> {label}
                  </Button>
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center"><MapPin className="h-4 w-4 mr-1" />{PROFILE.location}</span>
              <span className="inline-flex items-center"><Calendar className="h-4 w-4 mr-1" />Available for opportunities</span>
            </div>
          </div>
          <div className="justify-self-center">
            <motion.img
              src={PROFILE.headshot}
              alt={PROFILE.name}
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl object-cover shadow-lg"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-14 sm:py-20">
        <div className={container}>
          {sectionTitle("Selected Projects")}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <Card className="overflow-hidden rounded-2xl shadow-sm">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt="project" className="w-full h-full object-cover hover:scale-[1.03] transition-transform" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{p.title}</span>
                      <Code2 className="h-4 w-4 opacity-50" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.links.map(({ label, href, Icon }) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="sm" className="rounded-xl">
                            <Icon className="h-4 w-4 mr-2" /> {label}
                          </Button>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
        <div className={container}>
          {sectionTitle("Experience")}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {EXPERIENCE.map((job, idx) => (
              <motion.div
                key={job.company + idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Briefcase className="h-4 w-4" /> {job.role} · {job.company}
                    </CardTitle>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-3">
                      <span className="inline-flex items-center"><Calendar className="h-4 w-4 mr-1" />{job.period}</span>
                      <span className="inline-flex items-center"><MapPin className="h-4 w-4 mr-1" />{job.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc ml-5 space-y-2 text-sm">
                      {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-14 sm:py-20">
        <div className={container}>
          {sectionTitle("Skills")}
          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Badge key={s} variant="secondary" className="rounded-xl px-3 py-1 text-sm">{s}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-14 sm:py-20">
        <div className={container}>
          {sectionTitle("Publications")}
          <div className="mt-6 grid gap-4">
            {PUBLICATIONS.map((pub) => (
              <Card key={pub.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">{pub.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-slate-600 dark:text-slate-300">{pub.source}</p>
                  <div className="mt-3">
                    <a href={pub.link} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline" className="rounded-xl"><ExternalLink className="h-4 w-4 mr-2" /> View</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 sm:py-20">
        <div className={container}>
          {sectionTitle("Get in touch")}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Open to collaborations & opportunities</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Prefer email? Click the button to start a message – I read everything.
                </p>
                <div className="mt-4">
                  <a href={`mailto:${PROFILE.email}`}>
                    <Button className="rounded-2xl"><Mail className="h-4 w-4 mr-2" /> Email me</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader><CardTitle>Quick notes for recruiters</CardTitle></CardHeader>
              <CardContent>
                <ul className="list-disc ml-5 space-y-2 text-sm">
                  <li>Timezone: Central (US)</li>
                  <li>Interested in: product-focused biotech roles</li>
                  <li>Working style: async-friendly, cross-functional, rapid prototyping</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200/60 dark:border-slate-800/60">
        <div className={`${container} text-sm flex flex-col sm:flex-row items-center justify-between gap-3`}>
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <a href="#home" className="inline-flex items-center gap-1 hover:underline">
            Back to top <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}