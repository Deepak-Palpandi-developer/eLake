export interface Category {
    id: number;
    category: string;
    subCategory: string;
}

export interface SuggestedProduct {
    bannerImg: string;
    category: Category
}