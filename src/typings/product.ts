export interface ProductInfosInterface {
    product: {
        title: string,
        description: string,
        totalInventory: number,
        priceRange: {
            maxVariantPrice: {
                amount: number,
                currencyCode: string
            },
        },
        featuredImage: {
            url: string,
            altText: string | null,
            id: string,
            height: number
        },
        vendor: string
    }
}

export interface Product {
    node: {
        id: string,
        title: string,
        description: string,
        totalInventory: number,
        priceRange: {
            maxVariantPrice: {
                amount: number,
                currencyCode: string
            },
        },
        featuredImage: {
            url: string,
            altText: string | null,
            id: string,
            height: number
        },
        vendor: string
    }  
}

export interface HomeProps {
    products: Product []
}

export interface AllProductsInterface {
    products: {
        edges: Product[]
    }
}