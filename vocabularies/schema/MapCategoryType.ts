import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  ParkingMap: schema.ParkingMap as NamedNode<'http://schema.org/ParkingMap'>,
  SeatingMap: schema.SeatingMap as NamedNode<'http://schema.org/SeatingMap'>,
  TransitMap: schema.TransitMap as NamedNode<'http://schema.org/TransitMap'>,
  VenueMap: schema.VenueMap as NamedNode<'http://schema.org/VenueMap'>,
};

export type MapCategoryType =
  NamedNode<'http://schema.org/ParkingMap'>
  | NamedNode<'http://schema.org/SeatingMap'>
  | NamedNode<'http://schema.org/TransitMap'>
  | NamedNode<'http://schema.org/VenueMap'>;
