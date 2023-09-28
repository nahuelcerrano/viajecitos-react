import React from "react";

import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Divider, 
  Link,
} from "@nextui-org/react";

export default function BankCard({
  name,
  discount,
  link,
}) {
  return (
    <div className="flex justify-center">
      <Card 
        className="max-w-[200px] max-h-[500px]"
        radius="sm"
      >
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">{ name }</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p>Descuentos del { discount }% y hasta 6 cuotas sin interés</p>
        </CardBody>
        <Divider/>
        <CardFooter className="flex justify-center">
          <Link
            isExternal
            showAnchorIcon
            size="lg"
            href={ link }
          >
            Ir
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}