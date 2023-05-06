import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PropertyValueMixin } from './PropertyValue.js';

export interface LocationFeatureSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PropertyValue<D>, RdfResource<D> {
  hoursAvailable: Schema.OpeningHoursSpecification<D> | undefined;
  validFrom: Date | undefined;
  validThrough: Date | undefined;
}

export function LocationFeatureSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LocationFeatureSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class LocationFeatureSpecificationClass extends PropertyValueMixin(Resource) implements Partial<LocationFeatureSpecification> {
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

export const fromPointer = createFactory<LocationFeatureSpecification>([PropertyValueMixin, LocationFeatureSpecificationMixin], { types: [schema.LocationFeatureSpecification] });
