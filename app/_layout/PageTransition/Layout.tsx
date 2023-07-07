"use client";
import { usePathname } from "next/navigation";
import { MekuriLayout } from "@funtech-inc/mekuri";

export const PageTransitionLayout = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return <MekuriLayout router={pathname}>{children}</MekuriLayout>;
};