import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Flag<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, RdfResource<D> {
}

export function FlagMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Flag> & RdfResourceCore> & Base {
  @namespace(as)
  class FlagClass extends ActivityMixin(Resource) implements Partial<Flag> {
  }
  return FlagClass
}

class FlagImpl extends FlagMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Flag>) {
    super(arg, init)
    this.types.add(as.Flag)
  }

  static readonly __mixins: Mixin[] = [FlagMixin, ActivityMixin];
}
FlagMixin.appliesTo = as.Flag
FlagMixin.Class = FlagImpl

export const fromPointer = createFactory<Flag>([ActivityMixin, FlagMixin], { types: [as.Flag] });
