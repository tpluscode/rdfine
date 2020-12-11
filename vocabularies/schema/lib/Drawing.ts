import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Drawing<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function DrawingMixin<Base extends Constructor>(Resource: Base): Constructor<Drawing> & Base {
  @namespace(schema)
  class DrawingClass extends CreativeWorkMixin(Resource) implements Partial<Drawing> {
  }
  return DrawingClass
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
