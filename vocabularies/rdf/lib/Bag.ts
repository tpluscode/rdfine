import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface Bag<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function BagMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Bag> & RdfResourceCore> & Base {
  @namespace(rdf)
  class BagClass extends Resource implements Partial<Bag> {
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

export const fromPointer = createFactory<Bag>([BagMixin], { types: [rdf.Bag] });
