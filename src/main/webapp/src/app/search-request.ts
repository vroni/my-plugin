export class City {
id: number;
name: String;
}

export class District {
id: number;
name: String;
city: City;
}

export class SearchRequest {
id: number;
firstName: string;
lastName: string;
email: string;
appartmentSize: number;
appartmentRent: number;
districts: District[];
}
