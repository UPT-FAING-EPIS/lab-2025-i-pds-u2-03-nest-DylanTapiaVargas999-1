/**
 * Interfaz que define el contrato para un comando ejecutable.
 * Cualquier clase que implemente esta interfaz debe definir el método Execute.
 */
export interface ICommand {
  /**
   * Ejecuta la acción definida por el comando.
   */
  Execute(): void;
}