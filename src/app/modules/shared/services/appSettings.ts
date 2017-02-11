import { environment } from 'environments/environment';
export class AppSettings {
    public static BASE_URL: string = environment.urlBase;
    public static CURRENT_USER: string = "currentUser";
    public static CURRENT_USER_PERMISSIONS: string = "permissions";
    public static TOKEN_HEADER: string = "Authorization";

    //Roles
    public static USER_ROLE_ADMIN: string = "ROLE_ADMIN";
    public static USER_ROLE_VISITOR: string = "ROLE_VISITOR";
    public static USER_ROLE_CUSTOMER: string = "ROLE_CUSTOMER";

    public static getUserPermissions(): string[] {
        let permissions: string[] = [];
        let userPermissionsStr: string = localStorage.getItem(AppSettings.CURRENT_USER_PERMISSIONS);
        if (!!userPermissionsStr) {
            permissions = userPermissionsStr.split(",");
        }
        return permissions;
    }

}