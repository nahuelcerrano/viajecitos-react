import React from "react";

import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Divider, 
  Link,
  Button,
} from "@nextui-org/react";

export default function BankCard({
  name,
  discount,
  link,
}) {
  return (
    <div className="flex justify-center">
      <Card 
        className="max-w-[220px] max-h-[500px]"
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
            size="lg"
            href={ link }
          >
            <Button 
              size='sm' 
              color='success'
              radius='sm'
              className='mr-5'
            >
              Comprar
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}