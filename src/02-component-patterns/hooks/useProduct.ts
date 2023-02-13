import { useEffect, useState, useRef } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product,
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    
    setCounter(initialValues?.maxCount ? Math.min(initialValues?.maxCount!, newValue) : newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  }
  
  useEffect(() => {
    if (!isMounted.current) return;
      setCounter(value);
  }, [value]);
  
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false };
  }, []);

  return {
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    reset,
  };
};
