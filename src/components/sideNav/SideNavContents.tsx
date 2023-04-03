import briefcaseIcon from "../../assets/briefcase.png";
import homeIcon from "../../assets/home.png";
import usersIcon from "../../assets/users.png";
import guarantorsIcon from "../../assets/guarantors.png";
import loanIcon from "../../assets/loan.png";
import handShakeIcon from "../../assets/handshake-regular.png";
import savingsIcon from "../../assets/piggy-bank.png";
import loanRequestIcon from "../../assets/loanRequests.png";
import userCheckIcon from "../../assets/user-check.png";
import userTimesIcon from "../../assets/user-times.png";
import savingsProductIcon from "../../assets/savingsProduct.png";
import coinsIcon from "../../assets/feesAndCharges.png";
import transactionsIcon from "../../assets/transactions.png";
import serviceIcon from "../../assets/services.png";
import serviceActIcon from "../../assets/serviceAccount.png";
import SettlementIcon from "../../assets/settlements.png";
import reportIcon from "../../assets/reports.png";
import preferences from "../../assets/preference.png";
import feesAndPricingIcon from "../../assets/feesAndPricing.png";
import auditLogIcon from "../../assets/auditLogs.png";

interface NavItem {
  section: string;
  contents: NavItemContent[];
}

interface NavItemContent {
  label: string;
  icon: string;
  link: string;
}

const navItems: NavItem[] = [
  {
    section: "",
    contents: [
      { label: "Switch Organization", icon: briefcaseIcon, link: "/none" },
      { label: "Dashboard", icon: homeIcon, link: "/dashboard" },
    ],
  },
  {
    section: "CUSTOMERS",
    contents: [
      { label: "Users", icon: usersIcon, link: "/users" },
      { label: "Guarantors", icon: guarantorsIcon, link: "/none" },
      { label: "Loans", icon: loanIcon, link: "/none" },
      { label: "Decision Models", icon: handShakeIcon, link: "/none" },
      { label: "Loans", icon: loanIcon, link: "/none" },
      { label: "Savings", icon: savingsIcon, link: "/none" },
      { label: "Loan Requests", icon: loanRequestIcon, link: "/none" },
      { label: "Whitelist", icon: userCheckIcon, link: "/none" },
      { label: "Karma", icon: userTimesIcon, link: "/none" },
    ],
  },
  {
    section: "BUSINESSES",
    contents: [
      { label: "Organization", icon: briefcaseIcon, link: "/none" },
      { label: "Loan Requests", icon: loanRequestIcon, link: "/none" },
      { label: "Savings Products", icon: savingsProductIcon, link: "/none" },
      { label: "Fees and Charges", icon: coinsIcon, link: "/none" },
      { label: "Transactions", icon: transactionsIcon, link: "/none" },
      { label: "Services", icon: serviceIcon, link: "/none" },
      { label: "Service Account", icon: serviceActIcon, link: "/none" },
      { label: "Settlements", icon: SettlementIcon, link: "/none" },
      { label: "Reports", icon: reportIcon, link: "/none" },
    ],
  },
  {
    section: "SETTINGS",
    contents: [
      { label: "Preferences", icon: preferences, link: "/none" },
      { label: "Fees and Pricing", icon: feesAndPricingIcon, link: "/none" },
      { label: "Audit Logs", icon: auditLogIcon, link: "/none" },
    ],
  },
];

export default navItems;
