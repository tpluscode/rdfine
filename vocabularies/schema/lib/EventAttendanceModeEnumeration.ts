import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

const values = {
  MixedEventAttendanceMode: schema.MixedEventAttendanceMode,
  OfflineEventAttendanceMode: schema.OfflineEventAttendanceMode,
  OnlineEventAttendanceMode: schema.OnlineEventAttendanceMode,
};

export type EventAttendanceModeEnumeration = typeof values[keyof typeof values];

export default values;
