import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Remove<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function RemoveMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Remove> & RdfResourceCore> & Base {
  @namespace(as)
  class RemoveClass extends ActivityMixin(Resource) implements Partial<Remove> {
  }
  return RemoveClass
}

class RemoveImpl extends RemoveMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Remove>) {
    super(arg, init)
    this.types.add(as.Remove)
  }

  static readonly __mixins: Mixin[] = [RemoveMixin, ActivityMixin];
}
RemoveMixin.appliesTo = as.Remove
RemoveMixin.Class = RemoveImpl

export const fromPointer = createFactory<Remove>([ActivityMixin, RemoveMixin], { types: [as.Remove] });
