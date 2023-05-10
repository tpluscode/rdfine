import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Update<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function UpdateMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Update> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class UpdateClass extends ActivityMixin(Resource) implements Partial<Update> {
  }
  return UpdateClass
}

class UpdateImpl extends UpdateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Update>) {
    super(arg, init)
    this.types.add(as.Update)
  }

  static readonly __mixins: Mixin[] = [UpdateMixin, ActivityMixin];
}
UpdateMixin.appliesTo = as.Update
UpdateMixin.Class = UpdateImpl

export const fromPointer = createFactory<Update>([ActivityMixin, UpdateMixin], { types: [as.Update] });
