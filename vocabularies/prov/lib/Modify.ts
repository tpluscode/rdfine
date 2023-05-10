import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Modify<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, rdfine.RdfResource<D> {
}

export function ModifyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Modify> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class ModifyClass extends ActivityMixin(Resource) implements Partial<Modify> {
  }
  return ModifyClass
}

class ModifyImpl extends ModifyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Modify>) {
    super(arg, init)
    this.types.add(prov.Modify)
  }

  static readonly __mixins: Mixin[] = [ModifyMixin, ActivityMixin];
}
ModifyMixin.appliesTo = prov.Modify
ModifyMixin.Class = ModifyImpl

export const fromPointer = createFactory<Modify>([ActivityMixin, ModifyMixin], { types: [prov.Modify] });
