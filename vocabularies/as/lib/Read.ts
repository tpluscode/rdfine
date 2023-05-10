import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ActivityMixin } from './Activity.js';

export interface Read<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Activity<D>, rdfine.RdfResource<D> {
}

export function ReadMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Read> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class ReadClass extends ActivityMixin(Resource) implements Partial<Read> {
  }
  return ReadClass
}

class ReadImpl extends ReadMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Read>) {
    super(arg, init)
    this.types.add(as.Read)
  }

  static readonly __mixins: Mixin[] = [ReadMixin, ActivityMixin];
}
ReadMixin.appliesTo = as.Read
ReadMixin.Class = ReadImpl

export const fromPointer = createFactory<Read>([ActivityMixin, ReadMixin], { types: [as.Read] });
