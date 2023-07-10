import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Drawing<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
}

export function DrawingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Drawing & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DrawingClass extends CreativeWorkMixin(Resource) {
  }
  return DrawingClass as any
}

class DrawingImpl extends DrawingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Drawing>) {
    super(arg, init)
    this.types.add(schema.Drawing)
  }

  static readonly __mixins: Mixin[] = [DrawingMixin, CreativeWorkMixin];
}
DrawingMixin.appliesTo = schema.Drawing
DrawingMixin.Class = DrawingImpl

export const fromPointer = createFactory<Drawing>([CreativeWorkMixin, DrawingMixin], { types: [schema.Drawing] });
