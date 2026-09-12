"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const breadcrumbLabels: Record<string, string> = {
  "/": "ホーム",
  "/profile": "プロフィール",
  "/profile/awards": "受賞歴",
  "/services": "サービス",
  "/services/mottainai": "もったいない！",
  "/services/shareyourlife": "ShareYourLife",
  "/contact": "お問い合わせ",
};

const formatSegmentLabel = (segment: string) => {
  const decoded = decodeURIComponent(segment).replace(/-/g, " ");
  return decoded.charAt(0).toUpperCase() + decoded.slice(1);
};

type BreadcrumbItemData = {
  href?: string;
  label: string;
  isCurrent?: boolean;
};

export const NavBreadcrumb = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const items: BreadcrumbItemData[] = [
    { href: "/", label: breadcrumbLabels["/"] ?? "ホーム" },
  ];

  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    const label =
      breadcrumbLabels[currentPath] ??
      breadcrumbLabels[`/${segment}`] ??
      formatSegmentLabel(segment);

    items.push({
      href: isLast ? undefined : currentPath,
      label,
      isCurrent: isLast,
    });
  });

  return (
    <Breadcrumb className="absolute top-22 left-5">
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={item.href ?? `${item.label}-${index}`}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {item.isCurrent ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};