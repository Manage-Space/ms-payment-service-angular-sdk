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


export type PaymentTransactionStatus = 'canceled' | 'processing' | 'requires_action' | 'requires_capture' | 'requires_confirmation' | 'requires_payment_method' | 'succeeded' | 'failed';

export const PaymentTransactionStatus = {
    Canceled: 'canceled' as PaymentTransactionStatus,
    Processing: 'processing' as PaymentTransactionStatus,
    RequiresAction: 'requires_action' as PaymentTransactionStatus,
    RequiresCapture: 'requires_capture' as PaymentTransactionStatus,
    RequiresConfirmation: 'requires_confirmation' as PaymentTransactionStatus,
    RequiresPaymentMethod: 'requires_payment_method' as PaymentTransactionStatus,
    Succeeded: 'succeeded' as PaymentTransactionStatus,
    Failed: 'failed' as PaymentTransactionStatus
};

