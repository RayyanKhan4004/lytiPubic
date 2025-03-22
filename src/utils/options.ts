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
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
  { value: "2010", label: "2010" },
  { value: "2009", label: "2009" },
  { value: "2008", label: "2008" },
  { value: "2007", label: "2007" },
  { value: "2006", label: "2006" },
  { value: "2005", label: "2005" },
  { value: "2004", label: "2004" },
  { value: "2003", label: "2003" },
  { value: "2002", label: "2002" },
  { value: "2001", label: "2001" },
  { value: "2000", label: "2000" },
  { value: "1999", label: "1999" },
  { value: "1998", label: "1998" },
  { value: "1997", label: "1997" },
  { value: "1996", label: "1996" },
  { value: "1995", label: "1995" },
  { value: "1994", label: "1994" },
  { value: "1993", label: "1993" },
  { value: "1992", label: "1992" },
  { value: "1991", label: "1991" },
  { value: "1990", label: "1990" },
  { value: "1989", label: "1989" },
  { value: "1988", label: "1988" },
  { value: "1987", label: "1987" },
  { value: "1986", label: "1986" },
  { value: "1985", label: "1985" },
  { value: "1984", label: "1984" },
  { value: "1983", label: "1983" },
  { value: "1982", label: "1982" },
  { value: "1981", label: "1981" },
  { value: "1980", label: "1980" },
  { value: "1979", label: "1979" },
  { value: "1978", label: "1978" },
  { value: "1977", label: "1977" },
  { value: "1976", label: "1976" },
  { value: "1975", label: "1975" },
  { value: "1974", label: "1974" },
  { value: "1973", label: "1973" },
  { value: "1972", label: "1972" },
  { value: "1971", label: "1971" },
  { value: "1970", label: "1970" },
  { value: "1969", label: "1969" },
  { value: "1968", label: "1968" },
  { value: "1967", label: "1967" },
  { value: "1966", label: "1966" },
  { value: "1965", label: "1965" },
  { value: "1964", label: "1964" },
  { value: "1963", label: "1963" },
  { value: "1962", label: "1962" },
  { value: "1961", label: "1961" },
  { value: "1960", label: "1960" },
  { value: "1959", label: "1959" },
  { value: "1958", label: "1958" },
  { value: "1957", label: "1957" },
  { value: "1956", label: "1956" },
  { value: "1955", label: "1955" },
  { value: "1954", label: "1954" },
  { value: "1953", label: "1953" },
  { value: "1952", label: "1952" },
  { value: "1951", label: "1951" },
  { value: "1950", label: "1950" },
  { value: "1949", label: "1949" },
  { value: "1948", label: "1948" },
  { value: "1947", label: "1947" },
  { value: "1946", label: "1946" },
  { value: "1945", label: "1945" },
  { value: "1944", label: "1944" },
  { value: "1943", label: "1943" },
  { value: "1942", label: "1942" },
  { value: "1941", label: "1941" },
  { value: "1940", label: "1940" },
  { value: "1939", label: "1939" },
  { value: "1938", label: "1938" },
  { value: "1937", label: "1937" },
  { value: "1936", label: "1936" },
  { value: "1935", label: "1935" },
  { value: "1934", label: "1934" },
  { value: "1933", label: "1933" },
  { value: "1932", label: "1932" },
  { value: "1931", label: "1931" },
  { value: "1930", label: "1930" },
  { value: "1929", label: "1929" },
  { value: "1928", label: "1928" },
  { value: "1927", label: "1927" },
  { value: "1926", label: "1926" },
  { value: "1925", label: "1925" },
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
