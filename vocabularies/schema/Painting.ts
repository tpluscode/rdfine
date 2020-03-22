import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Painting extends Schema.CreativeWork, RdfResource {
}

export default function PaintingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaintingClass extends CreativeWorkMixin(Resource) implements Painting {
  }
  return PaintingClass
}

class PaintingImpl extends PaintingMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Painting)
  }
}
PaintingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Painting)
PaintingMixin.Class = PaintingImpl
