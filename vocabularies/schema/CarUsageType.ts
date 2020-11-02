import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  DrivingSchoolVehicleUsage: schema.DrivingSchoolVehicleUsage as NamedNode<'http://schema.org/DrivingSchoolVehicleUsage'>,
  RentalVehicleUsage: schema.RentalVehicleUsage as NamedNode<'http://schema.org/RentalVehicleUsage'>,
  TaxiVehicleUsage: schema.TaxiVehicleUsage as NamedNode<'http://schema.org/TaxiVehicleUsage'>,
};

export type CarUsageType =
  NamedNode<'http://schema.org/DrivingSchoolVehicleUsage'>
  | NamedNode<'http://schema.org/RentalVehicleUsage'>
  | NamedNode<'http://schema.org/TaxiVehicleUsage'>;
