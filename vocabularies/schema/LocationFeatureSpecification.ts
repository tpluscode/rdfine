import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PropertyValueMixin from './PropertyValue';

export interface LocationFeatureSpecification extends Schema.PropertyValue, RdfResource {
  hoursAvailable: Schema.OpeningHoursSpecification;
  validFrom: Date;
  validThrough: Date;
}

export default function LocationFeatureSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LocationFeatureSpecificationClass extends PropertyValueMixin(Resource) implements LocationFeatureSpecification {
    @property.resource()
    hoursAvailable!: Schema.OpeningHoursSpecification;
    @property.literal()
    validFrom!: Date;
    @property.literal()
    validThrough!: Date;
  }
  return LocationFeatureSpecificationClass
}

class LocationFeatureSpecificationImpl extends LocationFeatureSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LocationFeatureSpecification>) {
    super(arg, init)
    this.types.add(schema.LocationFeatureSpecification)
  }
}
LocationFeatureSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LocationFeatureSpecification)
LocationFeatureSpecificationMixin.Class = LocationFeatureSpecificationImpl
