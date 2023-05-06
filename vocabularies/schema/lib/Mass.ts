import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { QuantityMixin } from './Quantity.js';

export interface Mass<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Quantity<D>, RdfResource<D> {
}

export function MassMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Mass> & RdfResourceCore> & Base {
  @namespace(schema)
  class MassClass extends QuantityMixin(Resource) implements Partial<Mass> {
  }
  return MassClass
}

class MassImpl extends MassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Mass>) {
    super(arg, init)
    this.types.add(schema.Mass)
  }

  static readonly __mixins: Mixin[] = [MassMixin, QuantityMixin];
}
MassMixin.appliesTo = schema.Mass
MassMixin.Class = MassImpl

export const fromPointer = createFactory<Mass>([QuantityMixin, MassMixin], { types: [schema.Mass] });
