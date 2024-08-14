import { Notify } from 'quasar';

export const requestLogin = async (
  name: string,
  pass: string
): Promise<boolean> =>
  new Promise<boolean>((resolve, reject) => {
    const isValid = pass == 'nhutvinh14' || pass == '00000000';

    setTimeout(() => {
      if (isValid) {
        Notify.create({
          type: 'positive',
          position: 'top-right',
          message: 'Chuc mung em co duoc anh',
        });
        resolve(true);
      } else {
        Notify.create({
          type: 'negative',
          position: 'top-right',
          message: 'Chuc mung em co con cac',
        });
        resolve(false);
      }
    }, 2000);
  });

export const requestSignUp = async (
  name: string,
  email: string,
  pass: string
): Promise<boolean> =>
  new Promise<boolean>((resolve, reject) => {
    const isValid = pass == 'nhutvinh14' || pass == '00000000';

    setTimeout(() => {
      if (isValid) {
        Notify.create({
          type: 'positive',
          position: 'top-right',
          message: '10đ Em đa có account rồi đó',
        });
        resolve(true);
      } else {
        Notify.create({
          type: 'negative',
          position: 'top-right',
          message: 'Chuc mung em co con cac',
        });
        resolve(false);
      }
    }, 2000);
  });
