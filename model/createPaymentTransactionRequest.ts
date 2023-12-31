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
import { PaymentMethod } from './paymentMethod';


export interface CreatePaymentTransactionRequest { 
    /**
     * The identifier of the shopping cart.
     */
    cartId: string;
    /**
     * Amount in smallest currency unit (e.g. cents for USD).
     */
    amount: number;
    paymentMethod?: PaymentMethod;
    /**
     * Account ID
     */
    accountId: string;
    /**
     * Payment type
     */
    paymentType?: CreatePaymentTransactionRequest.PaymentTypeEnum;
    /**
     * Check number
     */
    checkNumber?: string;
}
export namespace CreatePaymentTransactionRequest {
    export type PaymentTypeEnum = 'credit_card' | 'cash' | 'check';
    export const PaymentTypeEnum = {
        CreditCard: 'credit_card' as PaymentTypeEnum,
        Cash: 'cash' as PaymentTypeEnum,
        Check: 'check' as PaymentTypeEnum
    };
}


