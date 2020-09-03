import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PropertyValueMixin } from './PropertyValue';

export interface LocationFeatureSpecification extends Schema.PropertyValue, RdfResource {
  hoursAvailable: Schema.OpeningHoursSpecification;
  validFrom: Date;
  validThrough: Date;
}

export function LocationFeatureSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LocationFeatureSpecificationClass extends PropertyValueMixin(Resource) implements LocationFeatureSpecification {
    @property.resource()
    hoursAvailable!: Schema.OpeningHoursSpecification;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom!: Date;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough!: Date;
  }
  return LocationFeatureSpecificationClass
}

class LocationFeatureSpecificationImpl extends LocationFeatureSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LocationFeatureSpecification>) {
    super(arg, init)
    this.types.add(schema.LocationFeatureSpecification)
  }

  static readonly __mixins: Mixin[] = [LocationFeatureSpecificationMixin, PropertyValueMixin];
}
LocationFeatureSpecificationMixin.appliesTo = schema.LocationFeatureSpecification
LocationFeatureSpecificationMixin.Class = LocationFeatureSpecificationImpl
