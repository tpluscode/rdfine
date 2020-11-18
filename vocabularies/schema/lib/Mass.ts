import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { QuantityMixin } from './Quantity';

export interface Mass<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Quantity<D>, RdfResource<D> {
}

export function MassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MassClass extends QuantityMixin(Resource) implements Mass {
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
