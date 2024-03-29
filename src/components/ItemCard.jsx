import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import ProofModal from "./ProofModal";

export function ItemCard({product}) {
    return (
        <Card className="max-w-[24rem] overflow-hidden">

            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img className="w-100 h-100"src={product.logo} alt={product.name} />
            </CardHeader>


            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {product.name}
                </Typography>
            </CardBody>


            <CardFooter className="flex items-center justify-between">
                <ProofModal product={product}/>
                <Button className="rounded-full" variant="outlined">Alternative</Button>
            </CardFooter>
        
        
        </Card>
    );
}