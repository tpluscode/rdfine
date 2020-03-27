import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ProductMixin from './Product';

export interface Vehicle extends Schema.Product, RdfResource {
  cargoVolume: Schema.QuantitativeValue;
  dateVehicleFirstRegistered: Date;
  driveWheelConfiguration: string;
  driveWheelConfigurationTerm: Schema.DriveWheelConfigurationValue;
  fuelConsumption: Schema.QuantitativeValue;
  fuelEfficiency: Schema.QuantitativeValue;
  fuelType: string;
  fuelTypeTerm: RdfResource | Schema.QualitativeValue;
  knownVehicleDamages: string;
  mileageFromOdometer: Schema.QuantitativeValue;
  numberOfAirbags: number | string;
  numberOfAxles: Schema.QuantitativeValue;
  numberOfAxlesLiteral: number;
  numberOfDoors: Schema.QuantitativeValue;
  numberOfDoorsLiteral: number;
  numberOfForwardGears: Schema.QuantitativeValue;
  numberOfForwardGearsLiteral: number;
  numberOfPreviousOwners: Schema.QuantitativeValue;
  numberOfPreviousOwnersLiteral: number;
  productionDate: Date;
  purchaseDate: Date;
  steeringPosition: Schema.SteeringPositionValue;
  vehicleConfiguration: string;
  vehicleEngine: Schema.EngineSpecification;
  vehicleIdentificationNumber: string;
  vehicleInteriorColor: string;
  vehicleInteriorType: string;
  vehicleModelDate: Date;
  vehicleSeatingCapacity: Schema.QuantitativeValue;
  vehicleSeatingCapacityLiteral: number;
  vehicleTransmission: string;
  vehicleTransmissionTerm: RdfResource | Schema.QualitativeValue;
}

export default function VehicleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VehicleClass extends ProductMixin(Resource) implements Vehicle {
    @property.resource()
    cargoVolume!: Schema.QuantitativeValue;
    @property.literal()
    dateVehicleFirstRegistered!: Date;
    @property.literal()
    driveWheelConfiguration!: string;
    @property({ path: schema.driveWheelConfiguration })
    driveWheelConfigurationTerm!: Schema.DriveWheelConfigurationValue;
    @property.resource()
    fuelConsumption!: Schema.QuantitativeValue;
    @property.resource()
    fuelEfficiency!: Schema.QuantitativeValue;
    @property.literal()
    fuelType!: string;
    @property({ path: schema.fuelType })
    fuelTypeTerm!: RdfResource | Schema.QualitativeValue;
    @property.literal()
    knownVehicleDamages!: string;
    @property.resource()
    mileageFromOdometer!: Schema.QuantitativeValue;
    @property.literal()
    numberOfAirbags!: number | string;
    @property.resource()
    numberOfAxles!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfAxles, type: Number })
    numberOfAxlesLiteral!: number;
    @property.resource()
    numberOfDoors!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfDoors, type: Number })
    numberOfDoorsLiteral!: number;
    @property.resource()
    numberOfForwardGears!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfForwardGears, type: Number })
    numberOfForwardGearsLiteral!: number;
    @property.resource()
    numberOfPreviousOwners!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfPreviousOwners, type: Number })
    numberOfPreviousOwnersLiteral!: number;
    @property.literal()
    productionDate!: Date;
    @property.literal()
    purchaseDate!: Date;
    @property()
    steeringPosition!: Schema.SteeringPositionValue;
    @property.literal()
    vehicleConfiguration!: string;
    @property.resource()
    vehicleEngine!: Schema.EngineSpecification;
    @property.literal()
    vehicleIdentificationNumber!: string;
    @property.literal()
    vehicleInteriorColor!: string;
    @property.literal()
    vehicleInteriorType!: string;
    @property.literal()
    vehicleModelDate!: Date;
    @property.resource()
    vehicleSeatingCapacity!: Schema.QuantitativeValue;
    @property.literal({ path: schema.vehicleSeatingCapacity, type: Number })
    vehicleSeatingCapacityLiteral!: number;
    @property.literal()
    vehicleTransmission!: string;
    @property({ path: schema.vehicleTransmission })
    vehicleTransmissionTerm!: RdfResource | Schema.QualitativeValue;
  }
  return VehicleClass
}

class VehicleImpl extends VehicleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Vehicle>) {
    super(arg, init)
    this.types.add(schema.Vehicle)
  }
}
VehicleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Vehicle)
VehicleMixin.Class = VehicleImpl
