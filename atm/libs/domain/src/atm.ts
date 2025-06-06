import { ICommand } from './icommand.interface';

/**
 * Representa un cajero automático (ATM) que ejecuta comandos.
 */
export class ATM {
  /**
   * Comando a ejecutar por el ATM.
   */
  _command: ICommand;

  /**
   * Crea una nueva instancia de ATM.
   * @param command Comando que será ejecutado por el ATM.
   */
  constructor(command: ICommand) {
    this._command = command;
  }

  /**
   * Ejecuta la acción asociada al comando.
   */
  public Action(): void {
    this._command.Execute();
  }
}