import { Account } from './account';
import { ICommand } from './icommand.interface';

/**
 * Comando para realizar un depósito en una cuenta bancaria.
 * Implementa la interfaz ICommand.
 */
export class DepositCommand implements ICommand {
  /**
   * Cuenta en la que se realizará el depósito.
   */
  _account: Account;

  /**
   * Monto a depositar.
   */
  _amount: number;

  /**
   * Crea una nueva instancia de DepositCommand.
   * @param account Cuenta destino del depósito.
   * @param amount Monto a depositar.
   */
  constructor(account: Account, amount: number) {
    this._account = account;
    this._amount = amount;
  }

  /**
   * Ejecuta el comando de depósito en la cuenta.
   */
  Execute(): void {
    this._account.Deposit(this._amount);
  }
}