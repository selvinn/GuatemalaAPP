export class Promotion {
    id: number;
    title: string;
    address: string;
    price: number;
    latitude: number;
    longitude: number;

    constructor(
        id?: number,
        title?: string,
        address?: string,
        price?: number,
        latitude?: number,
        longitude?: number
    ) {
        this.id = id;
        this.title = title;
        this.address = address;
        this.price = price;
        this.latitude = latitude;
        this.longitude = longitude;
    };
}
