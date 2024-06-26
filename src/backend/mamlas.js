import conf from "./conf";
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    async createMamla({ mgr, st, mamla_no, date, thana, note }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    mgr,
                    st,
                    mamla_no,
                    date,
                    thana,
                    note,
                }
            )
        } catch (error) {
            console.log("ERROR CREATE Mamla");
        }
    }

    async addUser(documentId, userId) {
        console.log(documentId, userId);
        try {

            const doc = await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, documentId);
            console.log(doc);

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                {
                    userList: [...doc.userList, userId]
                }
            )
        } catch (error) {
            console.log("ERROR UPDATING");
        }
    }

    async changeDate(documentId, date) {
        console.log(documentId, date);
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                {
                    date
                }
            )
        } catch (error) {
            console.log("ERROR UPDATING Date");
        }
    }



    async updateMamla(documentId, { mgr, st, mamla_no, date, thana, note }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId,
                { mgr, st, mamla_no, date, thana, note }
            )
        } catch (error) {
            console.log("mamla update failed");
        }
    }



    async deleteMamla(documentId) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                documentId
            )
            return true;
        } catch (error) {
            console.log("ERROR DELETING Mamla");
            return false;
        }
    }

    // async getPost(slug) {
    //     try {
    //         return this.databases.getDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             slug
    //         )
    //     } catch (error) {
    //         console.log("ERROR GET POST");
    //         return false;
    //     }
    // }


    //queries = [Query.equal("status", "active")]
    async getMamlaList() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.limit(1000)
                ]
            )
        } catch (error) {
            console.log("ERROR GET ALL POSTS");
        }
    }



    async getProfileMamlaList(userId) {
        try {
            const list = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.limit(100),
                    Query.contains("userList", userId),
                ]
            )
            return list?.documents;
        } catch (error) {
            console.log("ERROR GET PROFILE MAMLA");
        }
    }


    // file upload service

    // async uploadFile(file) {
    //     try {
    //         return await this.bucket.createFile(
    //             conf.appwriteBucketId,
    //             ID.unique(),
    //             file
    //         )
    //     } catch (error) {
    //         console.log("ERROR FILE UPLOAD");
    //         return false;
    //     }
    // }

    // file delete service

    // async deleteFile(fileId) {
    //     try {
    //         await this.bucket.deleteFile(
    //             conf.appwriteBucketId,
    //             fileId
    //         )
    //         return true;
    //     } catch (error) {
    //         console.log("ERROR FILE DELETE");
    //         return false;
    //     }
    // }

    // getFilePreview(fileId) {
    //     return this.bucket.getFilePreview(
    //         conf.appwriteBucketId,
    //         fileId
    //     )
    // }

}

const service = new Service()
export default service