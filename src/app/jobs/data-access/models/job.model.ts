export interface JobInterface {
    address: string;
    benefits: string[];
    createdAt?: string;
    description: string;
    email: string;
    employment_type: string[];
    id: string;
    location: { lat: number, long: number };
    name: string;
    phone: string;
    pictures: string[];
    salary: string;
    title: string;
    updatedAt?: string,
    locationName?: string
}

