import { Account } from './account';
import { ICommand } from './icommand.interface';

/**
 * Comando para realizar un retiro en una cuenta bancaria.
 * Implementa la interfaz ICommand.
 */
export class WithdrawCommand implements ICommand {
  /**
   * Cuenta de la que se realizará el retiro.
   */
  _account: Account;

  /**
   * Monto a retirar.
   */
  _amount: number;

  /**
   * Crea una nueva instancia de WithdrawCommand.
   * @param account Cuenta origen del retiro.
   * @param amount Monto a retirar.
   */
  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  /**
   * Ejecuta el comando de retiro en la cuenta.
   */
  Execute(): void {
    this._account.Withdraw(this._amount);
  }
}