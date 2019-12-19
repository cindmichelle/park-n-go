export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
}

export type UserViewModel = User & {
  id: string;
};

export const userViewModelinitialValue: UserViewModel = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNo: '',
  id: '',
};
