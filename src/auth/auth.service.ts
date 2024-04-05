import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getAuth(){
        return "Todos las Auth";
    }
}
