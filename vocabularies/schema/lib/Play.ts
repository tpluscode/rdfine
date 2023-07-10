import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Play<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function PlayMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Play & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PlayClass extends CreativeWorkMixin(Resource) {
  }
  return PlayClass as any
}

class PlayImpl extends PlayMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Play>) {
    super(arg, init)
    this.types.add(schema.Play)
  }

  static readonly __mixins: Mixin[] = [PlayMixin, CreativeWorkMixin];
}
PlayMixin.appliesTo = schema.Play
PlayMixin.Class = PlayImpl

export const fromPointer = createFactory<Play>([CreativeWorkMixin, PlayMixin], { types: [schema.Play] });
