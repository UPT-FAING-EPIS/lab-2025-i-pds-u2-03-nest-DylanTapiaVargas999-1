/**
 * Interfaz que define el contrato para una estrategia de pago.
 * Cualquier clase que implemente esta interfaz debe definir el método Pay.
 */
export interface IPaymentStrategy {
    /**
     * Procesa el pago con el monto especificado.
     * @param amount Monto a pagar.
     * @returns true si el pago fue procesado correctamente.
     */
    Pay(amount: number): boolean;
}