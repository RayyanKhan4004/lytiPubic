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
  { value: "Title Only", label: "Title Only" },
  { value: "Escrow Only", label: "Escrow Only" },
  { value: "Title and Escrow", label: "Title and Escrow" },
  { value: "Commercial Escrow", label: "Commercial Escrow" },
  { value: "Commercial Title", label: "Commercial Title" },
  { value: "LCP", label: "LCP" },
  { value: "Other", label: "Other" },
];

export const roleOption = [
  { value: "Admin", label: "Admin" },
  { value: "ISA", label: "ISA" },
  { value: "Sales Manager", label: "Sales Manager" },
  { value: "Account Executive", label: "Account Executive" },
];
export const transactionOption = [
  { value: "Sale", label: "Sale" },
  { value: "Refi", label: "Refi" },
];

// export const aeLeadStageOptions = [
//   { value: "Pipeline", label: "Pipeline" },
//   { value: "App Set", label: "App Set" },
//   { value: "App Met", label: "App Met" },
//   { value: "Signed", label: "Signed" },
//   { value: "1st Time Showing", label: "1st Time Showing" },
//   { value: "1st Time Offer", label: "1st Time Offer" },
//   { value: "Live Listing", label: "Live Listing" },
//   { value: "Listing Expired", label: "Listing Expired" },
//   { value: "Buyer Agreement Expired", label: "Buyer Agreement Expired" },
//   { value: "Pending", label: "Pending" },
//   { value: "Closed", label: "Closed" },
//   { value: "Lost", label: "Lost" },
// ];
export const aeLeadStageOptions = [
  { value: "App Set", label: "App Set" },
  { value: "App Met", label: "App Met" },
  { value: "Verbal Commitments", label: "Verbal Commitments" },
  { value: "Closed", label: "Closed" },
  { value: "Lost", label: "Lost" },
  { value: "Cancelled", label: "Cancelled" },
  { value: "Prelim Commitments", label: "Prelim Commitments" },
];

export const filterOption = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "excluded", label: "Excluded" },
];

export const accountOptions = [
  { value: "Account", label: "Account" },
  { value: "Escrow Fee Income", label: "Escrow Fee Income" },
  { value: "Title Fee Income", label: "Title Fee Income" },
  {
    value: "Other Receivable-Pass Through Fees",
    label: "Other Receivable-Pass Through Fees",
  },
  { value: "Fees In Transit", label: "Fees In Transit" },
];

export const feeCategoryOptions = [
  { value: "Title Charges", label: "Title Charges" },
  { value: "Escrow Charges", label: "Escrow Charges" },
];
