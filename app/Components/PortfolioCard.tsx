import { Card, CardDescription, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


import Image from "next/image"

export function PortfolioCard() {
  return (
    <Card>
      <div>
        <Image
          alt = "Titulo do item Portfolio"
          src=""

        />
      </div>
      <CardHeader>
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição</CardDescription>

      </CardHeader>
      <CardContent>
        <Badge>React.js</Badge>
        <Badge>Next.js</Badge>

      </CardContent>
      <CardFooter>
        <Button>
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}