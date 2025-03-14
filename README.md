# Shea McKenzie Consulting Website

A professional consulting website for Shea McKenzie, showcasing strategic development and AI-powered solutions.

## Overview

This website is designed to showcase Shea McKenzie's consulting services, expertise, and projects. It includes:

- Professional, responsive design
- Detailed service descriptions
- About page with professional background
- Project showcase
- Contact form and information

## File Structure

```
consultingwebsite/
├── index.html              # Homepage
├── services.html           # Services page
├── about.html              # About page
├── case-studies.html       # Projects/Case Studies page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Image directory (needs to be populated)
└── README.md               # This file
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/consultingwebsite.git
   cd consultingwebsite
   ```

2. **Add Images**
   You'll need to add the following images to the `images/` directory:
   - `hero-bg.jpg` - Background for hero section
   - `page-header-bg.jpg` - Background for page headers
   - `consultant.jpg` - Professional headshot
   - `shea-mckenzie.jpg` - Another professional photo for About page
   - `education.jpg` - Image related to education
   - `personal.jpg` - Personal image for About page
   - `strategic-analysis.jpg` - Image for Strategic Analysis service
   - `ai-implementation.jpg` - Image for AI Implementation service
   - `market-development.jpg` - Image for Market Development service
   - `project-management.jpg` - Image for Project Management service
   - `project1.jpg`, `project2.jpg`, `project3.jpg` - Project highlight images
   - `project-government.jpg` - Featured project image
   - `project-ai.jpg`, `project-strategy.jpg`, `project-digital.jpg`, `project-team.jpg` - Additional project images

3. **View the Website**
   Open `index.html` in your web browser to view the website.

## Customization

### Changing Content

1. **Text Content**: Edit the HTML files to update text content.
2. **Images**: Replace the images in the `images/` directory with your own.
3. **Colors**: Modify the color scheme by editing the CSS variables in `css/styles.css`:
   ```css
   :root {
       --primary-color: #2c3e50;
       --secondary-color: #3498db;
       --accent-color: #e74c3c;
       /* ... other variables ... */
   }
   ```

### Contact Form

The contact form is currently set up for demonstration purposes. To make it functional:

1. Choose a form submission service (e.g., Formspree, Netlify Forms)
2. Update the form action in `contact.html`
3. Configure the form handling in `js/main.js`

## Deployment

To deploy this website:

1. **GitHub Pages**:
   - Push to a GitHub repository
   - Enable GitHub Pages in the repository settings

2. **Netlify**:
   - Connect your GitHub repository to Netlify
   - Configure build settings (not required for static HTML)

3. **Traditional Hosting**:
   - Upload all files to your web hosting service via FTP

## Credits

- Fonts: Google Fonts (Montserrat, Open Sans)
- Icons: Font Awesome
- Map: Google Maps Embed API

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or customization requests, contact Shea McKenzie at sheamckenziebc@gmail.com.