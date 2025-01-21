interface IDishesItem {
    id: number;
    name: string;
    description: string;
    ingredients: string[];
    calories: number;
    price: number;
    image: string;
    thumbnail: string;
}

interface ICategory {
    id: number;
    name: string;
    items: IDishesItem[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IDishes {
    menu: {
        categories: ICategory[];
    };
}
