import conf from "./conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call login method
                return this.login({ email, password })
                // return userAccount;
            } else {
                console.log("ERROR CODE 2");
                return userAccount;
            }
        } catch (error) {
            console.log("ERROR CODE 1");
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("ERROR LOGGING IN");
        }
    }

    async getCurrentUser() {

        try {
            return await this.account.get()
        } catch (error) {
            console.log("ERROR GETING CURRENT USER");
            return null
        }
        return null;
    }

    async logout() {
        try {
            this.account.deleteSessions()
        } catch (error) {
            console.log("ERROR LOGOUT");
        }
    }
}

const authService = new AuthService();

export default authService;