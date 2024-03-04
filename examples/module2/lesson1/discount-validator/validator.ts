import { isNumber } from "../utils/utils";

export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }


  if (!lastName) {
    errors.push('Last name is required');
  }

  if(firstName.length < 1 || lastName.length < 1) {
    errors.push('First name and Last name should have minimum 1 char');
  }


  if (!isNumber(age)) {
    errors.push('Age must be a number');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
