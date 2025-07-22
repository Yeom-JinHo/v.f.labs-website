import type { COMPANY_NAME } from "@/consts/company";

export type CompanyName = (typeof COMPANY_NAME)[keyof typeof COMPANY_NAME];
