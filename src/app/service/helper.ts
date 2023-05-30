import { ChangeEvent, FormEvent } from "react";

export function handleOnChange(e: ChangeEvent<HTMLInputElement>, fnc: Function) {
  fnc(e.target.value);
}

export async function submitApi(e: FormEvent, refetch:Function) {
  e.preventDefault();
  await refetch();
};
