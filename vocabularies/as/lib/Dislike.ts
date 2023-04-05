import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Dislike<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function DislikeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Dislike> & RdfResourceCore> & Base {
  @namespace(as)
  class DislikeClass extends ActivityMixin(Resource) implements Partial<Dislike> {
  }
  return DislikeClass
}

class DislikeImpl extends DislikeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Dislike>) {
    super(arg, init)
    this.types.add(as.Dislike)
  }

  static readonly __mixins: Mixin[] = [DislikeMixin, ActivityMixin];
}
DislikeMixin.appliesTo = as.Dislike
DislikeMixin.Class = DislikeImpl

export const fromPointer = createFactory<Dislike>([ActivityMixin, DislikeMixin], { types: [as.Dislike] });
