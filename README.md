# Afrikajournals Dashboard (Dockerized)

This is the frontend dashboard for **Afrikajournals**, containerized using Docker for easy development and deployment.

## 🐳 Docker Instructions

### Build the Docker Image

```bash
docker build -t afrikajournals-dashboard .


## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## API Integration Status
Currently, the application uses mock data for most pages. Only the "Submit Journal" page is connected to a live backend API endpoint.

Backend Developer Note
All other components (e.g., Journal Listings, Search, Filters, Analytics) are using placeholder/mock data. Please expose corresponding API endpoints for full integration:

Journals list

Search filters

Metrics/analytics

Indexing data

Language/disciplines/countries

📄 License
MIT

---

### ✅ Message to Backend Dev (save as `DEV_NOTE.md` or send directly)

```markdown
# Message to Backend Developer

Hi [Dev’s Name],

The frontend dashboard has been fully Dockerized and pushed to GitHub.

**Important note:**  
Only the `Submit Journal` page is currently using an actual API endpoint. The rest of the application (journal listings, search filters, analytics, etc.) is relying on mock data.

To proceed with full integration, we need the following API endpoints:

- Journals list (GET)
- Journal details by ID (GET)
- Advanced search and filters (GET/POST)
- Analytics/metrics data (GET)
- Indexing, language, disciplines, and country data (GET)

Let me know when those are available or if you need example payloads.

Thanks!  
— Michael
