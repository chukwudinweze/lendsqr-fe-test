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
}

const navItems: NavItem[] = [
  {
    section: "",
    contents: [
      { label: "Switch Organization", icon: briefcaseIcon },
      { label: "Dashboard", icon: homeIcon },
    ],
  },
  {
    section: "CUSTOMERS",
    contents: [
      { label: "Users", icon: usersIcon },
      { label: "Guarantors", icon: guarantorsIcon },
      { label: "Loans", icon: loanIcon },
      { label: "Decision Models", icon: handShakeIcon },
      { label: "Loans", icon: loanIcon },
      { label: "Savings", icon: savingsIcon },
      { label: "Loan Requests", icon: loanRequestIcon },
      { label: "Whitelist", icon: userCheckIcon },
      { label: "Karma", icon: userTimesIcon },
    ],
  },
  {
    section: "BUSINESSES",
    contents: [
      { label: "Organization", icon: briefcaseIcon },
      { label: "Loan Requests", icon: loanRequestIcon },
      { label: "Savings Products", icon: savingsProductIcon },
      { label: "Fees and Charges", icon: coinsIcon },
      { label: "Transactions", icon: transactionsIcon },
      { label: "Services", icon: serviceIcon },
      { label: "Service Account", icon: serviceActIcon },
      { label: "Settlements", icon: SettlementIcon },
      { label: "Reports", icon: reportIcon },
    ],
  },
  {
    section: "SETTINGS",
    contents: [
      { label: "Preferences", icon: preferences },
      { label: "Fees and Pricing", icon: feesAndPricingIcon },
      { label: "Audit Logs", icon: auditLogIcon },
    ],
  },
];

export default navItems;
