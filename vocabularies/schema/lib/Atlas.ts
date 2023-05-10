import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Atlas<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function AtlasMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Atlas> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AtlasClass extends CreativeWorkMixin(Resource) implements Partial<Atlas> {
  }
  return AtlasClass
}

class AtlasImpl extends AtlasMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Atlas>) {
    super(arg, init)
    this.types.add(schema.Atlas)
  }

  static readonly __mixins: Mixin[] = [AtlasMixin, CreativeWorkMixin];
}
AtlasMixin.appliesTo = schema.Atlas
AtlasMixin.Class = AtlasImpl

export const fromPointer = createFactory<Atlas>([CreativeWorkMixin, AtlasMixin], { types: [schema.Atlas] });
