import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface BarOrPub<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function BarOrPubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BarOrPubClass extends FoodEstablishmentMixin(Resource) implements BarOrPub {
  }
  return BarOrPubClass
}

class BarOrPubImpl extends BarOrPubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BarOrPub>) {
    super(arg, init)
    this.types.add(schema.BarOrPub)
  }

  static readonly __mixins: Mixin[] = [BarOrPubMixin, FoodEstablishmentMixin];
}
BarOrPubMixin.appliesTo = schema.BarOrPub
BarOrPubMixin.Class = BarOrPubImpl
