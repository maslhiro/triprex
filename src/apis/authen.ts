import { Notify } from 'quasar';

export const requestLogin = async (
  name: string,
  pass: string
): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const isValid = pass == 'nhutvinh14';

    setTimeout(() => {
      if (isValid) {
        Notify.create({
          type: 'positive',
          message: 'Chuc mung em co duoc anh',
        });
        resolve('');
      } else {
        Notify.create({
          type: 'negative',
          message: 'Chuc mung em co con cac',
        });
        resolve('Cuts');
      }
    }, 2000);
  });
