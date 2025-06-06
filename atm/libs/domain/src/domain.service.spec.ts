import { Account } from './account';
import { WithdrawCommand } from './withdraw-command';
import { DepositCommand } from './deposit-command';
import { ATM } from './atm';

/**
 * Prueba unitaria para verificar que al ejecutar un retiro,
 * el saldo de la cuenta se actualiza correctamente.
 */
describe('GivenAccountAndWithdraw_ThenExecute_ReturnsCorrectAmount', () => {
  let account: Account;

  beforeEach(async () => {
    account = new Account();
    account.AccountBalance = 300;
    const amount = 100;
    const withdraw = new WithdrawCommand(account, amount);
    new ATM(withdraw).Action();
  });

  it('should be 200', () => {
    expect(account.AccountBalance == 200).toBeTruthy();
  });
});

/**
 * Prueba unitaria para verificar que al ejecutar un depósito,
 * el saldo de la cuenta se actualiza correctamente.
 */
describe('GivenAccountAndDeposit_ThenExecute_ReturnsCorrectAmount', () => {
  let account: Account;

  beforeEach(async () => {
    account = new Account();
    account.AccountBalance = 200;
    const amount = 100;
    const deposit = new DepositCommand(account, amount);
    new ATM(deposit).Action();
  });

  it('should be 300', () => {
    expect(account.AccountBalance == 300).toBeTruthy();
  });
});