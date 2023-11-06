/**
 * ManageSpace Payment API
 * ManageSpace Payment API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TransactionStatusCodeNames } from './transactionStatusCodeNames';


export interface TransactionStatusResponse { 
    /**
     * Transaction Status Id
     */
    transactionStatusId: number;
    codeName: TransactionStatusCodeNames;
    /**
     * Display Name
     */
    displayName: string;
}
export namespace TransactionStatusResponse {
}


