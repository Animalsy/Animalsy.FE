import {
  CiHome,
  CiBag1,
  CiPassport1,
  CiPhone,
} from "react-icons/ci";

export type NavigationData = {
  name: string;
  navigateTo: string;
  icon?: any;
  nestedNavitems?: NavigationData[];
  color?: string;
};
export const NavigationData: NavigationData[] = [
  {
    name: "Profile",
    navigateTo: "/profile",
    icon: CiPassport1,
    color: "accent",
  },
  {
    name: "Home",
    navigateTo: "/",
    icon: CiHome,
  },
  {
    name: "Contact",
    navigateTo: "/contact",
    icon: CiPhone,
  },
  {
    name: "Services",
    navigateTo: "/services",
    icon: CiBag1,
    nestedNavitems: [
      { name: "Pet Grooming", navigateTo: "/grooming" },
      { name: "Pet Insurance", navigateTo: "/insurance" },
      { name: "Pet Photography", navigateTo: "/photography" },
      { name: "Veterinary Care", navigateTo: "/care" },
      { name: "Pet Transport", navigateTo: "/transport" },
      { name: "Pet Boarding", navigateTo: "/boarding" },
      { name: "Pet Training", navigateTo: "/training" },
      { name: "Pet Sitting", navigateTo: "/sitting" },
      { name: "Pet Adoption", navigateTo: "/adoption" },
      { name: "Pet Supplies", navigateTo: "/supplies" },
    ],
  },
];
