export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    country: string;
    city: string;
}
declare const LogginUserDto_base: import("@nestjs/common").Type<Pick<CreateUserDto, "email" | "password">>;
export declare class LogginUserDto extends LogginUserDto_base {
}
export {};
