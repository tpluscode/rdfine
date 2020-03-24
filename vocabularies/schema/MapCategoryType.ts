import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type MapCategoryType = NamedNode;

export default {
  ParkingMap: schema.ParkingMap,
  SeatingMap: schema.SeatingMap,
  TransitMap: schema.TransitMap,
  VenueMap: schema.VenueMap,
};
