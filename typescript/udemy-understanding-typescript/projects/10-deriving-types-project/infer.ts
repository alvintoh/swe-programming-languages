function add(a: number, b: number): number {
  return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValue = ReturnValueType<AddFn>;
