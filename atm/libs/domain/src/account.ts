/**
 * Representa una cuenta bancaria con operaciones básicas.
 */
export class Account {
  /**
   * Monto máximo permitido para depósitos.
   */
  public MAX_INPUT_AMOUNT: number = 10000;

  /**
   * Número de cuenta.
   */
  public AccountNumber: number;

  /**
   * Saldo actual de la cuenta.
   */
  public AccountBalance: number;

  /**
   * Retira una cantidad del saldo de la cuenta.
   * @param amount Cantidad a retirar.
   * @throws Error si la cantidad es mayor al saldo disponible.
   */
  public Withdraw(amount: number): void {
    if (amount > this.AccountBalance)
      throw new Error('The input amount is greater than balance.');
    this.AccountBalance -= amount;
  }

  /**
   * Deposita una cantidad en la cuenta.
   * @param amount Cantidad a depositar.
   * @throws Error si la cantidad es mayor al máximo permitido.
   */
  public Deposit(amount: number): void {
    if (amount > this.MAX_INPUT_AMOUNT)
      throw new Error('The input amount is greater than maximum allowed.');
    this.AccountBalance += amount;
  }
}