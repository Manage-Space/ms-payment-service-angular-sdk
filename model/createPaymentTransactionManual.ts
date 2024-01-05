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
import { PaymentMethod } from './paymentMethod';


export interface CreatePaymentTransactionManual { 
    /**
     * The identifier of the shopping cart.
     */
    invoiceId: string;
    /**
     * Invoice line item ids.
     */
    invoiceLineItemIds: Array<string>;
    paymentMethod?: PaymentMethod;
    /**
     * Account ID
     */
    accountId: string;
    /**
     * Payment type
     */
    paymentType?: CreatePaymentTransactionManual.PaymentTypeEnum;
    /**
     * Check number
     */
    checkNumber?: string;
}
export namespace CreatePaymentTransactionManual {
    export type PaymentTypeEnum = 'credit_card' | 'cash' | 'check';
    export const PaymentTypeEnum = {
        CreditCard: 'credit_card' as PaymentTypeEnum,
        Cash: 'cash' as PaymentTypeEnum,
        Check: 'check' as PaymentTypeEnum
    };
}


