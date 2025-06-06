import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Estrategia de pago en efectivo.
 * Implementa la interfaz IPaymentStrategy para procesar pagos usando efectivo.
 */
export class CashPaymentStrategy implements IPaymentStrategy {
    /**
     * Procesa el pago en efectivo.
     * @param amount Monto a pagar.
     * @returns true si el pago fue procesado correctamente.
     */
    public Pay(amount: number): boolean {
        console.info("Customer pays Rs " + amount + " By Cash");
        return true;
    }
}