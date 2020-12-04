import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Quantity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
}

export function QuantityMixin<Base extends Constructor>(Resource: Base): Constructor<Quantity> & Base {
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
