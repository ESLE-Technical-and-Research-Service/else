'use client';

import {usePathname} from "next/navigation";
import {ProductLinks} from "../../../../../components/src/types/products";
import Cameras from "../../../../../components/src/products/cameras";
import PressureVehiclesProducts from "../../../../../components/src/products/pressure-vehicles";

export default function Products() {
    const pathname = usePathname();
    const slug = pathname?.split("/").pop();

    return (
        <main className="w-full overflow-y-auto bg-[var(--foreground)]">
            {slug === ProductLinks.CAMERAS && <Cameras />}
            {slug === ProductLinks.PRESSURE_VEHICLES && <PressureVehiclesProducts />}
            {slug === ProductLinks.ACCESSORIES && <h2>Accessories</h2>}
        </main>
    )
}