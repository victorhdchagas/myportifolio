import { defineDb, defineTable, column } from 'astro:db';

const PersonalInfo = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    // Hero section
    heroTitle: column.text(),
    heroSubtitle: column.text(),
    heroCtaText: column.text(),
    // About section
    aboutTitle: column.text(),
    aboutBio: column.text(),
    aboutSkills: column.json(), // Array of strings
    aboutExperience: column.text(),
    aboutImage: column.text({ optional: true }),
    // Contact section
    contactTitle: column.text(),
    contactSubtitle: column.text(),
    contactEmail: column.text(),
    contactLinkedin: column.text(),
    contactGithub: column.text(),
    contactNostr: column.text({ optional: true }),
  }
});

const Projects = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    smallDescription: column.text(),
    fullDescription: column.json(), // Array of strings
    images: column.json({ optional: true }), // Array of image URLs
    tags: column.json(), // Array of technology tags
    link: column.text({ optional: true }),
  }
});

const Authors = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    bio: column.text(),
    avatar: column.text({ optional: true }),
    email: column.text({ optional: true }),
    website: column.text({ optional: true }),
    twitter: column.text({ optional: true }),
    linkedin: column.text({ optional: true }),
    github: column.text({ optional: true }),
    nostr: column.text({ optional: true }),
  }
});

export default defineDb({
  tables: {
    PersonalInfo,
    Projects,
    Authors
  }
});