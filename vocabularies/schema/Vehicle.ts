import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ProductMixin } from './Product';

export interface Vehicle extends Schema.Product, RdfResource {
  cargoVolume: Schema.QuantitativeValue | undefined;
  dateVehicleFirstRegistered: Date | undefined;
  driveWheelConfiguration: string | undefined;
  driveWheelConfigurationTerm: Schema.DriveWheelConfigurationValue | undefined;
  fuelConsumption: Schema.QuantitativeValue | undefined;
  fuelEfficiency: Schema.QuantitativeValue | undefined;
  fuelType: string | undefined;
  fuelTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  knownVehicleDamages: string | undefined;
  mileageFromOdometer: Schema.QuantitativeValue | undefined;
  numberOfAirbags: number | string | undefined;
  numberOfAxles: Schema.QuantitativeValue | undefined;
  numberOfAxlesLiteral: number | undefined;
  numberOfDoors: Schema.QuantitativeValue | undefined;
  numberOfDoorsLiteral: number | undefined;
  numberOfForwardGears: Schema.QuantitativeValue | undefined;
  numberOfForwardGearsLiteral: number | undefined;
  numberOfPreviousOwners: Schema.QuantitativeValue | undefined;
  numberOfPreviousOwnersLiteral: number | undefined;
  productionDate: Date | undefined;
  purchaseDate: Date | undefined;
  steeringPosition: Schema.SteeringPositionValue | undefined;
  vehicleConfiguration: string | undefined;
  vehicleEngine: Schema.EngineSpecification | undefined;
  vehicleIdentificationNumber: string | undefined;
  vehicleInteriorColor: string | undefined;
  vehicleInteriorType: string | undefined;
  vehicleModelDate: Date | undefined;
  vehicleSeatingCapacity: Schema.QuantitativeValue | undefined;
  vehicleSeatingCapacityLiteral: number | undefined;
  vehicleTransmission: string | undefined;
  vehicleTransmissionTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
}

export function VehicleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VehicleClass extends ProductMixin(Resource) implements Vehicle {
    @property.resource()
    cargoVolume: Schema.QuantitativeValue | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateVehicleFirstRegistered: Date | undefined;
    @property.literal()
    driveWheelConfiguration: string | undefined;
    @property({ path: schema.driveWheelConfiguration })
    driveWheelConfigurationTerm: Schema.DriveWheelConfigurationValue | undefined;
    @property.resource()
    fuelConsumption: Schema.QuantitativeValue | undefined;
    @property.resource()
    fuelEfficiency: Schema.QuantitativeValue | undefined;
    @property.literal()
    fuelType: string | undefined;
    @property({ path: schema.fuelType })
    fuelTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
    @property.literal()
    knownVehicleDamages: string | undefined;
    @property.resource()
    mileageFromOdometer: Schema.QuantitativeValue | undefined;
    @property.literal()
    numberOfAirbags: number | string | undefined;
    @property.resource()
    numberOfAxles: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfAxles, type: Number })
    numberOfAxlesLiteral: number | undefined;
    @property.resource()
    numberOfDoors: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfDoors, type: Number })
    numberOfDoorsLiteral: number | undefined;
    @property.resource()
    numberOfForwardGears: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfForwardGears, type: Number })
    numberOfForwardGearsLiteral: number | undefined;
    @property.resource()
    numberOfPreviousOwners: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfPreviousOwners, type: Number })
    numberOfPreviousOwnersLiteral: number | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    productionDate: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    purchaseDate: Date | undefined;
    @property()
    steeringPosition: Schema.SteeringPositionValue | undefined;
    @property.literal()
    vehicleConfiguration: string | undefined;
    @property.resource()
    vehicleEngine: Schema.EngineSpecification | undefined;
    @property.literal()
    vehicleIdentificationNumber: string | undefined;
    @property.literal()
    vehicleInteriorColor: string | undefined;
    @property.literal()
    vehicleInteriorType: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    vehicleModelDate: Date | undefined;
    @property.resource()
    vehicleSeatingCapacity: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.vehicleSeatingCapacity, type: Number })
    vehicleSeatingCapacityLiteral: number | undefined;
    @property.literal()
    vehicleTransmission: string | undefined;
    @property({ path: schema.vehicleTransmission })
    vehicleTransmissionTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  }
  return VehicleClass
}

class VehicleImpl extends VehicleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Vehicle>) {
    super(arg, init)
    this.types.add(schema.Vehicle)
  }

  static readonly __mixins: Mixin[] = [VehicleMixin, ProductMixin];
}
VehicleMixin.appliesTo = schema.Vehicle
VehicleMixin.Class = VehicleImpl
