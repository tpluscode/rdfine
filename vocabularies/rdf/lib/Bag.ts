import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdf } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '..';

export interface Bag<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
}

export function BagMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class BagClass extends Resource implements Bag {
  }
  return BagClass
}

class BagImpl extends BagMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Bag>) {
    super(arg, init)
    this.types.add(rdf.Bag)
  }

  static readonly __mixins: Mixin[] = [BagMixin];
}
BagMixin.appliesTo = rdf.Bag
BagMixin.Class = BagImpl
