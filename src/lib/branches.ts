export type Branch = {
  city: string;
  address: string;
  phone: string;
  // Approximate position on stylized India SVG (percent)
  x: number;
  y: number;
};

export const BRANCHES: Branch[] = [
  { city: "Rohtak",   address: "1st Floor, 129 L, near CR Polytechnic Back Gate Power House, Model Town, Rohtak, Haryana 124001", phone: "+91 8950329919", x: 38, y: 32 },
  { city: "Hissar",   address: "DSB-198, Red Square Market, near Eminent Mall, Mehta Nagar, Hisar, Haryana 125001",                phone: "+91 7800020055", x: 33, y: 30 },
  { city: "Delhi",    address: "Office No. 44, Dwarka Mor Phase 1, Mohan Garden, Uttam Nagar, Delhi 110059",                       phone: "+91 8684031003", x: 43, y: 33 },
  { city: "Gurgaon",  address: "Sector 29, Gurgaon, Haryana",                                                                       phone: "+91 9876543213", x: 41, y: 35 },
  { city: "Noida",    address: "Sector 29, Noida, Uttar Pradesh",                                                                   phone: "+91 9876543214", x: 45, y: 34 },
  { city: "Dehradun", address: "Office No 46, Balliwala Chowk, Vijay Park Extension, Dehradun, Uttarakhand 248001",                 phone: "+91 7206720663", x: 48, y: 24 },
  { city: "Jhajjar",  address: "Charkhi Dadri - Jhajjar Rd, near Bhagat Singh Chowk, Jhajjar, Haryana 124103",                      phone: "+91 7206720234", x: 40, y: 34 },
  { city: "Sirsa",    address: "Office No 46, Balliwala Chowk, Vijay Park Extension, Sirsa, Haryana 125055",                        phone: "+91 9680061002", x: 30, y: 31 },
];

export const PRIMARY_WHATSAPP = "919680061002";