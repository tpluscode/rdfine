import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PropertyValueMixin } from './PropertyValue';

export interface LocationFeatureSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PropertyValue<D>, RdfResource<D> {
  hoursAvailable: Schema.OpeningHoursSpecification<D> | undefined;
  validFrom: Date | undefined;
  validThrough: Date | undefined;
}

export function LocationFeatureSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LocationFeatureSpecificationClass extends PropertyValueMixin(Resource) implements LocationFeatureSpecification {
    @property.resource()
    hoursAvailable: Schema.OpeningHoursSpecification | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validThrough: Date | undefined;
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
