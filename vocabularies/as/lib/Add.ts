import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Add<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function AddMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Add & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class AddClass extends ActivityMixin(Resource) {
  }
  return AddClass as any
}

class AddImpl extends AddMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Add>) {
    super(arg, init)
    this.types.add(as.Add)
  }

  static readonly __mixins: Mixin[] = [AddMixin, ActivityMixin];
}
AddMixin.appliesTo = as.Add
AddMixin.Class = AddImpl

export const fromPointer = createFactory<Add>([ActivityMixin, AddMixin], { types: [as.Add] });
