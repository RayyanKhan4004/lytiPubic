interface optionType {
  value: string;
  label: string;
}

export const fileStatusOption: optionType[] = [
  { value: "Open", label: "Open" },
  { value: "Closed", label: "Closed" },
  { value: "On Hold", label: "On Hold" },
  { value: "Cancelled", label: "Cancelled" },
];

export const countyOptions = [
  { value: "Alameda", label: "Alameda" },
  { value: "Bedford", label: "Bedford" },
  { value: "Contra Costa", label: "Contra Costa" },
  { value: "Fresno", label: "Fresno" },
  { value: "Imperial", label: "Imperial" },
  { value: "Inyo", label: "Inyo" },
  { value: "Kern", label: "Kern" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "Mendocino", label: "Mendocino" },
  { value: "Modoc", label: "Modoc" },
  { value: "Napa", label: "Napa" },
  { value: "Orange", label: "Orange" },
  { value: "Riverside", label: "Riverside" },
  { value: "Sacramento", label: "Sacramento" },
  { value: "San Bernardino", label: "San Bernardino" },
  { value: "San Diego", label: "San Diego" },
  { value: "San Luis Obispo", label: "San Luis Obispo" },
  { value: "San Mateo", label: "San Mateo" },
  { value: "Santa Barbara", label: "Santa Barbara" },
  { value: "Santa Clara", label: "Santa Clara" },
  { value: "Stanislaus", label: "Stanislaus" },
  { value: "Tulare", label: "Tulare" },
  { value: "Ventura", label: "Ventura" },
];
export const fileTypeOptions = [
  { value: "Title Only - REFI", label: "Title Only - REFI" },
  { value: "Title Only - SALE", label: "Title Only - SALE" },
  { value: "Prelim/Commitment", label: "Prelim/Commitment" },
  { value: "Escrow Only - Sale", label: "Escrow Only - Sale" },
  { value: "Escrow Only - REFI", label: "Escrow Only - REFI" },
  { value: "Title and Escrow - SALE", label: "Title and Escrow - SALE" },
  { value: "Title and Escrow - REFI", label: "Title and Escrow - REFI" },
  { value: "Commercial Escrow - REFI", label: "Commercial Escrow - REFI" },
  { value: "Commercial Title - REFI", label: "Commercial Title - REFI" },
  { value: "Commercial Title - SALE", label: "Commercial Title - SALE" },
  { value: "LCP", label: "LCP" },
  { value: "Other", label: "Other" },
];

export const roleOption = [
  { value: "Admin", label: "Admin" },
  { value: "ISA", label: "ISA" },
  { value: "Sales Manager", label: "Sales Manager" },
  { value: "Account Executive", label: "Account Executive" },
];

export const filterOption = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "excluded", label: "Excluded" },
];
