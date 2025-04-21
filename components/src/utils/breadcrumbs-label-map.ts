// Utility to map any navigation path to its PL/ENG label for breadcrumbs
import {mainNavItems} from '../header/navigation/config/main-nav-items';
import {productsMenuItems} from "../header/navigation/config/products-menu-items";
import {servicesDropdownItems} from "../header/navigation/config/services-dropdown-items";
import {waterSewageSubmenuItems} from "../header/navigation/config/water-sewage-submenu-items";
import waterSewageProductsNavItems from "../header/navigation/config/water-sewage-products-nav-items";

export type BreadcrumbLang = 'pl' | 'en';

type Labels = { pl: string, en: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flattenNav(items: any[]): Record<string, Labels> {
  let map: Record<string, Labels> = {};
  for (const item of items) {
    if (
        typeof item === "object" &&
        item !== null &&
        typeof item.href === "string" &&
        typeof item.labelPL === "string" &&
        typeof item.labelENG === "string"
    ) {
      map[item.href] = { pl: item.labelPL, en: item.labelENG };
    }
    if (item && Array.isArray(item.items)) {
      map = { ...map, ...flattenNav(item.items) };
    }
  }
  return map;
}

const labelMap = {
  ...flattenNav(mainNavItems),
  ...flattenNav(productsMenuItems),
  ...flattenNav(servicesDropdownItems),
  ...flattenNav(waterSewageSubmenuItems),
  ...flattenNav(waterSewageProductsNavItems()),
};

export function getBreadcrumbLabel(path: string, language: BreadcrumbLang): string | undefined {
  const labels = labelMap[path];
  if (!labels) return undefined;
  return language === 'pl' ? labels.pl : labels.en;
}
