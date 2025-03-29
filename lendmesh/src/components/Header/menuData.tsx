import { Menu } from "../../types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 2,
    title: "Loans",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Personal Loans",
        path: "/loans/personal_loans",
        newTab: false,
      },
      {
        id: 22,
        title: "Vehicle Loans",
        path: "/loans/vehicle_loans",
        newTab: false,
      },
      {
        id: 23,
        title: "Student Loans",
        path: "/loans/student_loans",
        newTab: false,
      },
      {
        id: 24,
        title: "Mortgage Loans",
        path: "/loans/mortgage_loans",
        newTab: false,
      },
      {
        id: 25,
        title: "Home Equity Loans",
        path: "/loans/home_equity_loans",
        newTab: false,
      }
    ],
  },
  {
    id: 3,
    title: "Calculators",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Home Affordability",
        path: "/calculator/home-affordability",
        newTab: false,
      },
      {
        id: 32,
        title: "Mortgage Calculator",
        path: "/calculator/mortgage-calculator",
        newTab: false,
      },
    ],

  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Community",
    path: "/community",
    newTab: false,
  },

];
export default menuData;
