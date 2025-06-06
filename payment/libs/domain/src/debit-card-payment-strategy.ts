import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia de pago con tarjeta de débito.
 * Implementa la interfaz IPaymentStrategy para procesar pagos usando tarjeta de débito.
 */
export class DebitCardPaymentStrategy implements IPaymentStrategy {
    /**
     * Procesa el pago usando tarjeta de débito.
     * @param amount Monto a pagar.
     * @returns true si el pago fue procesado correctamente.
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " using Debit Card");
        return true;
    }
}