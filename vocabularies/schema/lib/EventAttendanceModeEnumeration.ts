import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  MixedEventAttendanceMode: schema.MixedEventAttendanceMode as NamedNode<'http://schema.org/MixedEventAttendanceMode'>,
  OfflineEventAttendanceMode: schema.OfflineEventAttendanceMode as NamedNode<'http://schema.org/OfflineEventAttendanceMode'>,
  OnlineEventAttendanceMode: schema.OnlineEventAttendanceMode as NamedNode<'http://schema.org/OnlineEventAttendanceMode'>,
};

export type EventAttendanceModeEnumeration =
  NamedNode<'http://schema.org/MixedEventAttendanceMode'>
  | NamedNode<'http://schema.org/OfflineEventAttendanceMode'>
  | NamedNode<'http://schema.org/OnlineEventAttendanceMode'>;
