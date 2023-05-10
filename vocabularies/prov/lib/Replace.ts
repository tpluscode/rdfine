import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Replace<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Activity<D>, rdfine.RdfResource<D> {
}

export function ReplaceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Replace> & RdfResourceCore> & Base {
  @rdfine.namespace(prov)
  class ReplaceClass extends ActivityMixin(Resource) implements Partial<Replace> {
  }
  return ReplaceClass
}

class ReplaceImpl extends ReplaceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Replace>) {
    super(arg, init)
    this.types.add(prov.Replace)
  }

  static readonly __mixins: Mixin[] = [ReplaceMixin, ActivityMixin];
}
ReplaceMixin.appliesTo = prov.Replace
ReplaceMixin.Class = ReplaceImpl

export const fromPointer = createFactory<Replace>([ActivityMixin, ReplaceMixin], { types: [prov.Replace] });
