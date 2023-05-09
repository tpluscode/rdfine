import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Photograph<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function PhotographMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Photograph> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PhotographClass extends CreativeWorkMixin(Resource) implements Partial<Photograph> {
  }
  return PhotographClass
}

class PhotographImpl extends PhotographMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Photograph>) {
    super(arg, init)
    this.types.add(schema.Photograph)
  }

  static readonly __mixins: Mixin[] = [PhotographMixin, CreativeWorkMixin];
}
PhotographMixin.appliesTo = schema.Photograph
PhotographMixin.Class = PhotographImpl

export const fromPointer = createFactory<Photograph>([CreativeWorkMixin, PhotographMixin], { types: [schema.Photograph] });
