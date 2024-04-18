export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    isAdmin: boolean;
}
declare const LogginUserDto_base: import("@nestjs/common").Type<Pick<CreateUserDto, "email" | "password">>;
export declare class LogginUserDto extends LogginUserDto_base {
}
export {};
