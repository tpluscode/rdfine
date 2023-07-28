import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Painting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function PaintingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Painting & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PaintingClass extends CreativeWorkMixin(Resource) {
  }
  return PaintingClass as any
}

class PaintingImpl extends PaintingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Painting>) {
    super(arg, init)
    this.types.add(schema.Painting)
  }

  static readonly __mixins: Mixin[] = [PaintingMixin, CreativeWorkMixin];
}
PaintingMixin.appliesTo = schema.Painting
PaintingMixin.Class = PaintingImpl

export const fromPointer = createFactory<Painting>([CreativeWorkMixin, PaintingMixin], { types: [schema.Painting] });
