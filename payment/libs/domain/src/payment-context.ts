import { IPaymentStrategy } from "./ipayment-strategy.interface";

/**
 * Contexto para el procesamiento de pagos.
 * Permite seleccionar y utilizar diferentes estrategias de pago en tiempo de ejecución.
 */
export class PaymentContext {
    /**
     * Referencia a la estrategia de pago actual.
     * El contexto no conoce la clase concreta de la estrategia, solo la interfaz.
     */
    private PaymentStrategy: IPaymentStrategy;

    /**
     * Establece la estrategia de pago a utilizar.
     * @param strategy Estrategia de pago que se usará.
     */
    public SetPaymentStrategy(strategy: IPaymentStrategy): void {
        this.PaymentStrategy = strategy;
    }

    /**
     * Procesa el pago delegando la operación a la estrategia seleccionada.
     * @param amount Monto a pagar.
     * @returns true si el pago fue procesado correctamente.
     */
    public Pay(amount: number): boolean {
        return this.PaymentStrategy.Pay(amount);
    }    
}