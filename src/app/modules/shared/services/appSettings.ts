import { environment } from 'environments/environment';
export class AppSettings {
    public static BASE_URL: string = environment.urlBase;
    public static CURRENT_USER: string = "currentUser";
    public static CURRENT_USER_PERMISSIONS: string = "permissions";
    public static TOKEN_HEADER: string = "Authorization";
}