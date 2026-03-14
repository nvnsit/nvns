import { Building2 } from 'lucide-react'

// Map company names to their logo paths
const companyLogoMap = {
  'TCS': '/logos/tcs.png',
  'Infosys': '/logos/infosys.png',
  'Wipro': '/logos/wipro.png',
  'Accenture': '/logos/accenture.png',
  'Cognizant': '/logos/cognizant.png',
  'HCL': '/logos/hcl.png',
  'Capgemini': '/logos/capgemini.png',
  'Tech Mahindra': '/logos/tech-mahindra.png',
  'LTI': '/logos/lti.png',
  'IBM': '/logos/ibm.png',
  'Microsoft': '/logos/microsoft.jpg',
  'Amazon': '/logos/amazon.png',
  'Oracle': '/logos/oracle.png',
  'Dell': '/logos/dell.png',
  'Cisco': '/logos/cisco.png',
}

/**
 * Get the logo path for a company name
 * @param {string} companyName - The name of the company
 * @returns {string} - The path to the company logo or null if not found
 */
export const getCompanyLogo = (companyName) => {
  return companyLogoMap[companyName] || null
}

/**
 * Get a company logo component (image or fallback icon)
 * @param {string} companyName - The name of the company
 * @param {object} imageProps - Props to pass to the img element
 * @returns {JSX.Element} - Image element or Building2 icon as fallback
 */
export const CompanyLogo = ({ companyName, className = 'h-8 w-auto object-contain', ...imageProps }) => {
  const logoPath = getCompanyLogo(companyName)
  
  if (logoPath) {
    return (
      <img 
        src={logoPath} 
        alt={`${companyName} logo`}
        className={className}
        {...imageProps}
      />
    )
  }
  
  return <Building2 className={className} />
}

export default getCompanyLogo

