import { schema } from './namespace';

const values = {
  RsvpResponseMaybe: schema.RsvpResponseMaybe,
  RsvpResponseNo: schema.RsvpResponseNo,
  RsvpResponseYes: schema.RsvpResponseYes,
};

export type RsvpResponseType = typeof values[keyof typeof values];

export default values;
