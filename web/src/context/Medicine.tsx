import { createContext } from 'react';

interface Medicine {
  id: number;
  name: string;
  manufacturer: string;
  compund: string;
  description: string;
  photo: string;
}

const MedicineContext = createContext<Medicine>({} as Medicine);

export default MedicineContext;