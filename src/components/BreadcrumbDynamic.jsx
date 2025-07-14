import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useBreadcrumbItems } from "@/hooks/useBreadcrumbItems";
import React from "react";

function BreadcrumbDynamic({ customLastName = "" }) {
  const items = useBreadcrumbItems(customLastName);

  return (
    <Breadcrumb>
      <BreadcrumbList className="pt-3 mb-5">
        {items.map((item, idx) => {
          const isLast = item.isLast;

          return (
            <React.Fragment key={idx}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-heading">
                    {item.name}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={item.to}>{item.name}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbDynamic;
