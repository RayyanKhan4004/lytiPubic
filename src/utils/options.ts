import { Label } from "recharts";
import {
  useGetListingOfficesQuery,
  useGetSellingOfficeQuery,
} from "../lib/rtkQuery/orderApi";
import { useFetchUsersWithoutLimitQuery } from "../lib/rtkQuery/userApi";

export const fileStatusOption = [
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
  { value: "Prelim/Commitment", label: "Prelim/Commitment" },
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
export const yearOptions = [
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
];

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

export const useOptions = () => {
  const { data } = useFetchUsersWithoutLimitQuery();
  const { data: listingOfficeData } = useGetListingOfficesQuery();
  const { data: SellingOfficeData } = useGetSellingOfficeQuery();

  const agentsOption =
    data?.users?.map((user: { firstname: string }) => ({
      value: user.firstname,
      label: user.firstname,
    })) || [];

  const listingOfficeOption =
    listingOfficeData?.listingOffices?.map(
      (user: { name: string; id: number }) => ({
        value: user.id,
        label: user.name,
      })
    ) || [];

  const sellingOfficesOption =
    SellingOfficeData?.SellingOffices?.map(
      (user: { name: string; id: number }) => ({
        value: user.id,
        label: user.name,
      })
    ) || [];

  return { agentsOption, listingOfficeOption, sellingOfficesOption };
};

export const useOptionsAddNew = () => {
  const { data, refetch: refetchAgents } = useFetchUsersWithoutLimitQuery();
  const { data: listingOfficeData, refetch: refetchListingOffices } =
    useGetListingOfficesQuery();
  const { data: SellingOfficeData, refetch: refetchSellingOffices } =
    useGetSellingOfficeQuery();

  const agentsOption =
    data?.users?.map((user: { firstname: string }) => ({
      value: user.firstname,
      label: user.firstname,
    })) || [];

  const listingOfficeOption = [
    { value: "addNew", label: "Add new listing" },
    ...(listingOfficeData?.listingOffices?.map(
      (user: { name: string; id: number }) => ({
        value: user.id,
        label: user.name,
      })
    ) || []),
  ];

  const sellingOfficesOption = [
    { value: "addNew", label: "Add Selling Office " },
    ...(SellingOfficeData?.SellingOffices?.map(
      (user: { name: string; id: number }) => ({
        value: user.id,
        label: user.name,
      })
    ) || []),
  ];

  return {
    agentsOption,
    listingOfficeOption,
    sellingOfficesOption,
    refetchAgents,
    refetchListingOffices,
    refetchSellingOffices,
  };
};

export const graphOptions = [
  "Open Order",
  "Open Volume",
  "Open Revenue",
  "Closed Order",
  "Closed Volume",
  "Closed Revenue",
];

export const graphOption = [
  { value: "openOrder", label: "Open Order" },
  { value: "openVolume", label: "Open Volume" },
  { value: "openRevenue", label: "Open Revenue" },
  { value: "closedOrder", label: "Closed Order" },
  { value: "closedVolume", label: "Closed Volume" },
  { value: "closedRevenue", label: "Closed Revenue" },
];

export const ScopeOptions = [{ value: "Agents", label: "Agents" }];

export const ChallengeTypeOptions = [
  { value: "Race", label: "Race" },
  { value: "Everybody Wins", label: "Everybody Wins" },
  { value: "Per-Unit", label: "Per-Unit" },
];

// export const TimePeriodOptions = [
//   { value: "week", label: "Week" },
//   { value: "month", label: "Month" },
//   { value: "quarter", label: "Quarter" },
//   { value: "year", label: "Year" },
//   { value: "custom", label: "Custom" },
// ];

export const RecurringOptions = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

export const TimePeriodOptions = [
  { value: "month", label: "Month" },
  { value: "year", label: "Year" },
  { value: "custom", label: "Custom" },
];
