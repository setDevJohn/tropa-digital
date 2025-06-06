import { toast } from 'react-toastify';

import type { ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const position: ToastPosition = 'top-center';
const theme = 'light';

const toastSuccess = (message: string) => {
  toast.success(message, { position, theme });
};

const toastWarn = (message: string) => {
  toast.warn(message, { position, theme });
};

const toastError = (message: string) => {
  toast.error(message, { position, theme });
};

export { toastSuccess, toastWarn, toastError };