# Company Logos

This directory contains company logos used throughout the website, especially on the Placements page.

## Required Logo Files

Please add the following logo images (PNG format recommended, transparent background preferred):

- `tcs.png` - TCS logo
- `infosys.png` - Infosys logo
- `wipro.png` - Wipro logo
- `accenture.png` - Accenture logo
- `cognizant.png` - Cognizant logo
- `hcl.png` - HCL logo
- `capgemini.png` - Capgemini logo
- `tech-mahindra.png` - Tech Mahindra logo
- `lti.png` - LTI (LTI Mindtree) logo
- `ibm.png` - IBM logo
- `microsoft.png` - Microsoft logo
- `amazon.png` - Amazon logo
- `oracle.png` - Oracle logo
- `dell.png` - Dell logo
- `cisco.png` - Cisco logo

## Logo Specifications

- **Format**: PNG (preferred) or SVG
- **Background**: Transparent (recommended)
- **Size**: Recommended width 200-400px, maintain aspect ratio
- **Quality**: High resolution for crisp display
- **Naming**: Use lowercase with hyphens (e.g., `tech-mahindra.png`)

## Where Logos Are Used

1. **Placements Page - Partner Companies Section**: Main company cards
2. **Placements Page - Top Hiring Companies Section**: Company statistics cards
3. **Placements Page - Success Stories**: Small logos next to company names
4. **Homepage - Partner Companies Preview**: Company logo grid

## Fallback

If a logo file is missing, the system will automatically display a building icon as a fallback.

## Adding New Companies

To add a new company logo:
1. Add the logo file to this directory
2. Update the `getCompanyLogo` function in:
   - `src/pages/Placements.jsx`
   - `src/components/Placements.jsx`
3. Add the mapping: `'Company Name': '/logos/company-name.png'`



