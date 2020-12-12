import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ProductMixin } from './Product';

export interface Vehicle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Product<D>, RdfResource<D> {
  accelerationTime: Schema.QuantitativeValue<D> | undefined;
  bodyType: string | undefined;
  bodyTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  callSign: string | undefined;
  cargoVolume: Schema.QuantitativeValue<D> | undefined;
  dateVehicleFirstRegistered: Date | undefined;
  driveWheelConfiguration: string | undefined;
  driveWheelConfigurationTerm: Schema.DriveWheelConfigurationValue | undefined;
  'emissionsCO2': number | undefined;
  fuelCapacity: Schema.QuantitativeValue<D> | undefined;
  fuelConsumption: Schema.QuantitativeValue<D> | undefined;
  fuelEfficiency: Schema.QuantitativeValue<D> | undefined;
  fuelType: string | undefined;
  fuelTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  knownVehicleDamages: string | undefined;
  meetsEmissionStandard: string | undefined;
  meetsEmissionStandardTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  mileageFromOdometer: Schema.QuantitativeValue<D> | undefined;
  modelDate: Date | undefined;
  numberOfAirbags: number | string | undefined;
  numberOfAxles: Schema.QuantitativeValue<D> | undefined;
  numberOfAxlesLiteral: number | undefined;
  numberOfDoors: Schema.QuantitativeValue<D> | undefined;
  numberOfDoorsLiteral: number | undefined;
  numberOfForwardGears: Schema.QuantitativeValue<D> | undefined;
  numberOfForwardGearsLiteral: number | undefined;
  numberOfPreviousOwners: Schema.QuantitativeValue<D> | undefined;
  numberOfPreviousOwnersLiteral: number | undefined;
  payload: Schema.QuantitativeValue<D> | undefined;
  productionDate: Date | undefined;
  purchaseDate: Date | undefined;
  seatingCapacity: Schema.QuantitativeValue<D> | undefined;
  seatingCapacityLiteral: number | undefined;
  speed: Schema.QuantitativeValue<D> | undefined;
  steeringPosition: Schema.SteeringPositionValue | undefined;
  tongueWeight: Schema.QuantitativeValue<D> | undefined;
  trailerWeight: Schema.QuantitativeValue<D> | undefined;
  vehicleConfiguration: string | undefined;
  vehicleEngine: Schema.EngineSpecification<D> | undefined;
  vehicleIdentificationNumber: string | undefined;
  vehicleInteriorColor: string | undefined;
  vehicleInteriorType: string | undefined;
  vehicleModelDate: Date | undefined;
  vehicleSeatingCapacity: Schema.QuantitativeValue<D> | undefined;
  vehicleSeatingCapacityLiteral: number | undefined;
  vehicleSpecialUsage: string | undefined;
  vehicleSpecialUsageTerm: Schema.CarUsageType | undefined;
  vehicleTransmission: string | undefined;
  vehicleTransmissionTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
  weightTotal: Schema.QuantitativeValue<D> | undefined;
  wheelbase: Schema.QuantitativeValue<D> | undefined;
}

export function VehicleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Vehicle> & RdfResourceCore> & Base {
  @namespace(schema)
  class VehicleClass extends ProductMixin(Resource) implements Partial<Vehicle> {
    @property.resource()
    accelerationTime: Schema.QuantitativeValue | undefined;
    @property.literal()
    bodyType: string | undefined;
    @property({ path: schema.bodyType })
    bodyTypeTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
    @property.literal()
    callSign: string | undefined;
    @property.resource()
    cargoVolume: Schema.QuantitativeValue | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateVehicleFirstRegistered: Date | undefined;
    @property.literal()
    driveWheelConfiguration: string | undefined;
    @property({ path: schema.driveWheelConfiguration })
    driveWheelConfigurationTerm: Schema.DriveWheelConfigurationValue | undefined;
    @property.literal({ type: Number })
    'emissionsCO2': number | undefined;
    @property.resource()
    fuelCapacity: Schema.QuantitativeValue | undefined;
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
    @property.literal()
    meetsEmissionStandard: string | undefined;
    @property({ path: schema.meetsEmissionStandard })
    meetsEmissionStandardTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
    @property.resource()
    mileageFromOdometer: Schema.QuantitativeValue | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    modelDate: Date | undefined;
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
    @property.resource()
    payload: Schema.QuantitativeValue | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    productionDate: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    purchaseDate: Date | undefined;
    @property.resource()
    seatingCapacity: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.seatingCapacity, type: Number })
    seatingCapacityLiteral: number | undefined;
    @property.resource()
    speed: Schema.QuantitativeValue | undefined;
    @property()
    steeringPosition: Schema.SteeringPositionValue | undefined;
    @property.resource()
    tongueWeight: Schema.QuantitativeValue | undefined;
    @property.resource()
    trailerWeight: Schema.QuantitativeValue | undefined;
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
    vehicleSpecialUsage: string | undefined;
    @property({ path: schema.vehicleSpecialUsage })
    vehicleSpecialUsageTerm: Schema.CarUsageType | undefined;
    @property.literal()
    vehicleTransmission: string | undefined;
    @property({ path: schema.vehicleTransmission })
    vehicleTransmissionTerm: RDF.NamedNode | Schema.QualitativeValue | undefined;
    @property.resource()
    weightTotal: Schema.QuantitativeValue | undefined;
    @property.resource()
    wheelbase: Schema.QuantitativeValue | undefined;
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

export const fromPointer = createFactory<Vehicle>([ProductMixin, VehicleMixin], { types: [schema.Vehicle] });
