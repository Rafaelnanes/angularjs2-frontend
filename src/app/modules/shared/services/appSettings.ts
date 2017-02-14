import { environment } from 'environments/environment';
import { User } from './../models/index';
export class AppSettings {
    public static BASE_URL: string = environment.urlBase;

    public static USER_CART: string = "userCart";
    public static CURRENT_USER: string = "currentUser";
    public static TOKEN_HEADER: string = "Authorization";

    //Roles
    public static USER_ROLE_ADMIN: string = "ROLE_ADMIN";
    public static USER_ROLE_VISITOR: string = "ROLE_VISITOR";
    public static USER_ROLE_CUSTOMER: string = "ROLE_CUSTOMER";

    public static getUser(): User {
        try {
            return JSON.parse(localStorage.getItem(AppSettings.CURRENT_USER));
        } catch (error) {
            return null;            
        }
    }

}