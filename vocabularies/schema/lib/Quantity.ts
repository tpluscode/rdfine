import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Quantity<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
}

export function QuantityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuantityClass extends IntangibleMixin(Resource) implements Quantity {
  }
  return QuantityClass
}

class QuantityImpl extends QuantityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Quantity>) {
    super(arg, init)
    this.types.add(schema.Quantity)
  }

  static readonly __mixins: Mixin[] = [QuantityMixin, IntangibleMixin];
}
QuantityMixin.appliesTo = schema.Quantity
QuantityMixin.Class = QuantityImpl
