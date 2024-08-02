export interface ContactsResponse {
  meta: Meta;
  resources: Resource[];
}

export interface Meta {
  per_page: number;
  total: number;
  pages: number;
  page: number;
}

export interface Resource {
  id: string;
  record_type: string;
  fields: Fields;
  owner_id: null | string;
  children: string[];
  employers_info: Employersinfo[];
  updated: string;
  created: string;
  updater: null;
  creator: string;
  avatar_url: string;
  tags: Tag[];
  last_contacted: Lastcontacted;
  company_last_contacted: Companylastcontacted;
  last_contacted_user: null;
  lc: null;
  is_important: null;
  notice: null;
  reminders: null;
  reminder: null;
  creator_id: string;
  privacy: Privacy;
  is_editable: boolean;
  stages_info: Stagesinfo;
  files: null;
  contexts: Context[];
  object_type: string;
  tags2: string[];
}

export interface Context {
  context_key: string;
  context: (Employersinfo[] | any[] | null)[];
}

export interface Stagesinfo {}

export interface Privacy {
  read: null;
  edit: null;
}

export interface Companylastcontacted {
  in: null;
  out: null;
}

export interface Lastcontacted {
  tstamp: null;
  type: null;
  object_id: null;
  user_id: null;
  deletion_tstamp: null;
}

export interface Tag {
  id: string;
  tag: string;
}

export interface Employersinfo {
  contact_id: string;
  company_name: string;
  avatar_url: string;
}

export interface Fields {
  "company name"?: CompanyName[];
  twitter?: CompanyName[];
  description?: CompanyName[];
  email?: CompanyName[];
  facebook?: CompanyName[];
  "first name"?: CompanyName[];
  "last name"?: CompanyName[];
  linkedin?: CompanyName[];
  "parent company"?: ParentCompany[];
  title?: CompanyName[];
  URL?: CompanyName[];
  address?: CompanyName[];
  "contact employment"?: ContactEmployment[];
  lead_stage?: CompanyName[];
  phone?: CompanyName[];
}

export interface ContactEmployment {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
  extra_value: null | string;
}

export interface ParentCompany {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
  extra_value: string;
}

export interface CompanyName {
  label: string;
  modifier: string;
  value: string;
  is_primary: boolean;
}
