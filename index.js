// @flow
function fails(input: Buffer | string): string {
  if (Buffer.isBuffer(input)) {
    return input.toString('utf-8');
  } else {
    return input;
  }
}

function works(input: Buffer | string): string {
  if (input instanceof Buffer) {
    return input.toString('utf-8');
  } else {
    return input;
  }
}
