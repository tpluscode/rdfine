import { schema } from './namespace';

const values = {
  Clinician: schema.Clinician,
  MedicalResearcher: schema.MedicalResearcher,
};

export type MedicalAudienceType = typeof values[keyof typeof values];

export default values;
