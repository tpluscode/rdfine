import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AccommodationMixin } from './Accommodation';

export interface Suite<ID extends ResourceNode = ResourceNode> extends Schema.Accommodation<ID>, RdfResource<ID> {
  bed: Schema.BedDetails<SiblingNode<ID>> | undefined;
  bedLiteral: string | undefined;
  numberOfRooms: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfRoomsLiteral: number | undefined;
  occupancy: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
}

export function SuiteMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SuiteClass extends AccommodationMixin(Resource) implements Suite {
    @property.resource()
    bed: Schema.BedDetails | undefined;
    @property.literal({ path: schema.bed })
    bedLiteral: string | undefined;
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @property.resource()
    occupancy: Schema.QuantitativeValue | undefined;
  }
  return SuiteClass
}

class SuiteImpl extends SuiteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Suite>) {
    super(arg, init)
    this.types.add(schema.Suite)
  }

  static readonly __mixins: Mixin[] = [SuiteMixin, AccommodationMixin];
}
SuiteMixin.appliesTo = schema.Suite
SuiteMixin.Class = SuiteImpl
