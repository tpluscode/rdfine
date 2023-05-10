import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Quantity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
}

export function QuantityMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Quantity> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class QuantityClass extends IntangibleMixin(Resource) implements Partial<Quantity> {
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

export const fromPointer = createFactory<Quantity>([IntangibleMixin, QuantityMixin], { types: [schema.Quantity] });
