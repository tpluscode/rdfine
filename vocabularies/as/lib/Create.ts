import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Create<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function CreateMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Create & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class CreateClass extends ActivityMixin(Resource) {
  }
  return CreateClass as any
}

class CreateImpl extends CreateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Create>) {
    super(arg, init)
    this.types.add(as.Create)
  }

  static readonly __mixins: Mixin[] = [CreateMixin, ActivityMixin];
}
CreateMixin.appliesTo = as.Create
CreateMixin.Class = CreateImpl

export const fromPointer = createFactory<Create>([ActivityMixin, CreateMixin], { types: [as.Create] });
