export interface OrderDataType {
  // agent?: string;
  titleOffice?: string;
  titleRep?: string;
  titleRepPct?: number;
  openDate?: string;
  estimatedClosingDate?: string;
  closedDate?: string;
  salePrice?: number;
  loanAmount?: number;
  fileType?: string;
  orderNumber?: string;
  fileStatus?: string;
  propertyAddress?: string;
  propertyCounty?: string;
  propertyState?: string;
  titleOfficer?: string;
  escrowOfficer?: string;
  listingAgentCompany?: string;
  listingAgentContactName?: string;
  listingAgentContactEmail?: string;
  listingAgentPhone?: string;
  sellingAgentCompany?: string;
  sellingAgentContactName?: string;
  sellingAgentContactEmail?: string;
  sellingAgentPhone?: string;
  mortgageBrokerCompany?: string;
  mortgageBrokerContact?: string;
  mortgageBrokerContactEmail?: string;
  mortgageBrokerPhone?: string;
  underwriter?: string;
  filter?: string;
  page?: number;
  limit?: number;
  status?: string;
  type?: string;
  keyword?: string;
  // cancelDate?: string;
  // orderStatus?: string;
  transactionType?: string;
  aeLeadStage?: string;
  contact?: string;
  fees?: Fee[];
  firstname?: string;
  lastname?: string;
  listingOfficeId?: number;
  sellingOfficeId?: number;
  listingAgentId?: number;
  sellingAgentId?: number;
  orderId?: string;
  year?: string;
  startDate?: string;
  endDate?: string;
  appointmentMetDate?: string;
  appointmentSetDate?: string;
  userId?: string;
  selectedUser?: string;
}

export interface ListingOfficeDataType {
  name?: string;
  listingOfficeId?: number;
  contactName?: string;
  agentName?: string;
}

export interface Fee {
  feeDescription?: string;
  account?: string;
  feeCategory?: string;
  feeAmount?: number;
}

export interface UserDataType {
  firstname?: string;
  lastname?: string;
  alternativemail?: string;
  password?: string;
  business_entity?: string;
  email?: string;
  role?: string;
  startdate?: string;
  profileImage?: File | null;
  // brokerageCap?: string;
  // yearAnniversary?: string;
  // agentTransactionFee?: string;
  // agentMonthlyFee?: string;
  // commissionTemplate?: string;
  notes?: string;
  ae_commission_threshold?: number;
  ae_escrow_commission?: number;
  ae_title_commission?: number;
  career_path?: string;
  lead_source?: string;
  exclude_challenges_leaderboards?: boolean;
  download_transactions?: boolean;
  send_welcome_email?: boolean;
}

export interface UserTableType {
  filter: string;
  type: string;
  role: string;
}

export type DragAndDropColumnKey =
  | "verbalCommitments"
  | "apptSet"
  | "appMet"
  | "openingToDisclosure"
  | "postToDisclosures"
  | "fullCrToCde";

export type StagesBoardColumnKeys =
  | "Pipeline"
  | "AppSet"
  | "AppMet"
  | "Signed"
  | "FirstTimeShowing"
  | "FirstTimeOffer"
  | "LiveListing"
  | "ListingExpired"
  | "BuyerAgreementExpired"
  | "Pending"
  | "Closed"
  | "Lost";

export interface ChartData {
  name: string;
  value: number;
  color: string;
}

export interface graphType {
  filter?: string;
}

export interface SignUpFormValues {
  firstname?: string;
  lastname?: string;
  alternativemail?: string;
  password?: string;
  business_entity?: string;
  email?: string;
  role?: string;
  startdate?: string;
  profileImage?: File | null;
  // brokerageCap?: string;
  // yearAnniversary?: string;
  // agentTransactionFee?: string;
  // agentMonthlyFee?: string;
  // commissionTemplate?: string;
  notes?: string;
  ae_commission_threshold?: number;
  ae_escrow_commission?: number;
  ae_title_commission?: number;
  career_path?: string;
  lead_source?: string;
  exclude_challenges_leaderboards?: boolean;
  download_transactions?: boolean;
  send_welcome_email?: boolean;
  ownerId?: number;
}

export interface ChallengesType {
  challengeName?: string;
  scope?: string;
  categoryId?: number;
  challengeType?: string;
  timePeriodType: string;
  startDate?: string;
  endDate?: string;
  firstPlacePoints?: number;
  secondPlacePoints?: number;
  thirdPlacePoints?: number;
  points?: number;
  threshold?: number;
  recurring?: boolean | string;
  timePeriodSelection?: string;
}

export interface LeadSourceType {
  name: string;
  status?: string;
  groupName: string;
}

export interface DashboardDataType {
  name: string;
}
