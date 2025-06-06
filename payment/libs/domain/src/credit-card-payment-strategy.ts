import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia de pago con tarjeta de crédito.
 * Implementa la interfaz IPaymentStrategy para procesar pagos usando tarjeta de crédito.
 */
export class CreditCardPaymentStrategy implements IPaymentStrategy {
    /**
     * Procesa el pago usando tarjeta de crédito.
     * @param amount Monto a pagar.
     * @returns true si el pago fue procesado correctamente.
     */
    public Pay(amount: number): boolean
    {
        console.info("Customer pays Rs " + amount + " using Credit Card");
        return true;
    }    
}