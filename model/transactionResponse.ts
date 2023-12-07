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
import { PaymentTransactionResponsePaymentMethod } from './paymentTransactionResponsePaymentMethod';
import { TransactionStatusResponse } from './transactionStatusResponse';


export interface TransactionResponse { 
    /**
     * Transaction ID.
     */
    transactionId: string;
    /**
     * The subscription ID of the payment intent associated with the transaction.
     */
    subscriptionId: string;
    /**
     * The invoice ID of the payment intent
     */
    invoiceId: string;
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
     * Lease id.
     */
    leaseId: string | null;
    /**
     * Unit id.
     */
    unitId: string;
    /**
     * Shopping cart id.
     */
    shoppingCartId: string;
    /**
     * The currency.
     */
    currency: string;
    /**
     * Amount in smallest currency unit (e.g. cents for USD).
     */
    amount: number;
    status: TransactionStatusResponse;
    paymentMethod: PaymentTransactionResponsePaymentMethod | null;
    /**
     * Created at.
     */
    createdAt: string;
    /**
     * Created at.
     */
    updatedAt: string;
}

