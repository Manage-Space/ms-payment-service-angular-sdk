/**
 * ManageSpace Payment API
 * ManageSpace Payment API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PaymentTransactionTypeEnum } from './paymentTransactionTypeEnum';
import { TransactionTypeEnum } from './transactionTypeEnum';
import { PaymentTransactionStatus } from './paymentTransactionStatus';
import { PaymentTransactionResponsePaymentMethod } from './paymentTransactionResponsePaymentMethod';


export interface PaymentTransactionResponse { 
    /**
     * Payment Transaction ID.
     */
    paymentTransactionId: string;
    /**
     * The identifier of the payment intent associated with the payment transaction.
     */
    paymentProviderId: string;
    /**
     * Account id.
     */
    accountId: string;
    /**
     * Account Name
     */
    accountName: string;
    /**
     * Account Email Address
     */
    email: string | null;
    /**
     * Account Mobile Number
     */
    mobileNumber: string;
    /**
     * Site id.
     */
    siteId: string;
    /**
     * Shopping cart id.
     */
    cartId: string | null;
    /**
     * Amount in smallest currency unit (e.g. cents for USD).
     */
    amount: number;
    paymentTransactionStatus: PaymentTransactionStatus;
    paymentTransactionType: PaymentTransactionTypeEnum;
    transactionType: TransactionTypeEnum;
    paymentMethod: PaymentTransactionResponsePaymentMethod | null;
    /**
     * Client secret for use with payment provider.
     */
    clientSecret: string | null;
    /**
     * Created at.
     */
    createdAt: string;
    /**
     * Created by.
     */
    createdBy: string;
    /**
     * Invoice ID.
     */
    invoiceId: string;
    /**
     * Created at.
     */
    updatedAt: string | null;
    /**
     * Check number in case a payment transaction was check.
     */
    reference: string | null;
}
export namespace PaymentTransactionResponse {
}


