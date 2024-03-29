import { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";

export default function CategoryItems({ categoryName }) {

    const [productData, setProductData] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/product/showCategoryProducts/${categoryName}`);
               
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setProductData(responseData);
               
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        
        const fetchAll = async () => {
            try {
                const response = await fetch("http://localhost:8080/product/getProducts");
                console.log(response)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                setProductData(responseData);
                console.log(responseData)
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        if(categoryName==="All"){
            fetchAll();
        }
        else{fetchData();}



    }, []);



    return (
        <>
            <h1>{categoryName}</h1>
            <div className="ml-20 grid grid-cols-3 gap-x-3 gap-y-5">
                {isLoading ? <div> Loading ...</div> : 
                productData.map((product) => (
                    <ItemCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}