import { TxResult } from '../transactions/tx';

export class TxFailedError extends Error {
  constructor(public readonly txResult: TxResult) {
    super(JSON.stringify(txResult));
    this.name = 'TxFailedError';
  }

  toString = () => {
    return `[${this.name}]\n${JSON.stringify(this.txResult, null, 2)}`;
  };
}
