import { Card, CardDescription, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type PortfolioCardProps = {
  id: string,
  title: string,
  description: string,
  imageUrl: string,
  tags: string[]
}

export function PortfolioCard(id, title, description, imageUrl, tags): PortfolioCardProps {
  return (
    <Card>
      <div>
        <Image
          alt = {title}
          src= {imageUrl}

        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

      </CardHeader>
      <CardContent>
        
        <Badge>React.js</Badge>
      
      </CardContent>
      <CardFooter>
        <Button>
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}