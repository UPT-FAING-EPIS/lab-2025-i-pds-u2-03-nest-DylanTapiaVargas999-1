import { CashPaymentStrategy } from "./cash-payment-strategy";
import { CreditCardPaymentStrategy } from "./credit-card-payment-strategy";
import { DebitCardPaymentStrategy } from "./debit-card-payment-strategy";
import { PaymentContext } from "./payment-context";

/**
 * Servicio encargado de procesar pagos utilizando diferentes estrategias.
 */
export class PaymentService {
    /**
     * Procesa un pago según el tipo de pago seleccionado.
     * @param SelectedPaymentType Tipo de pago seleccionado (1: Crédito, 2: Débito, 3: Efectivo).
     * @param Amount Monto a pagar.
     * @returns true si el pago fue procesado correctamente.
     * @throws Error si el tipo de pago no es válido.
     */
    public ProcessPayment(SelectedPaymentType: number, Amount: number): boolean
    {
        // Crear una instancia del contexto de pago
        const context = new PaymentContext();
        if (SelectedPaymentType == PaymentType.CreditCard)
        {
            context.SetPaymentStrategy(new CreditCardPaymentStrategy());
        }
        else if (SelectedPaymentType == PaymentType.DebitCard)
        {
            context.SetPaymentStrategy(new DebitCardPaymentStrategy());
        }
        else if (SelectedPaymentType == PaymentType.Cash)
        {
            context.SetPaymentStrategy(new CashPaymentStrategy());
        }
        else
        {
            throw new Error("You Select an Invalid Payment Option");
        }
        // Finalmente, llama al método Pay de la estrategia seleccionada
        return context.Pay(Amount);
    }    
}

/**
 * Enumeración de los tipos de pago disponibles.
 */
export enum PaymentType
{
    CreditCard = 1,  // 1 para tarjeta de crédito
    DebitCard = 2,   // 2 para tarjeta de débito
    Cash = 3,        // 3 para efectivo
}