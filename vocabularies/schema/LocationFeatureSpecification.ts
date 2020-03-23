import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PropertyValueMixin from './PropertyValue';

export interface LocationFeatureSpecification extends Schema.PropertyValue, RdfResource {
  hoursAvailable: Schema.OpeningHoursSpecification;
  validFrom: Date | Date;
  validThrough: Date | Date;
}

export default function LocationFeatureSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LocationFeatureSpecificationClass extends PropertyValueMixin(Resource) implements LocationFeatureSpecification {
    @property.resource()
    hoursAvailable!: Schema.OpeningHoursSpecification;
    @property.literal()
    validFrom!: Date | Date;
    @property.literal()
    validThrough!: Date | Date;
  }
  return LocationFeatureSpecificationClass
}

class LocationFeatureSpecificationImpl extends LocationFeatureSpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LocationFeatureSpecification)
  }
}
LocationFeatureSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LocationFeatureSpecification)
LocationFeatureSpecificationMixin.Class = LocationFeatureSpecificationImpl
