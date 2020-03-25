import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreateActionMixin from './CreateAction';

export interface PaintAction extends Schema.CreateAction, RdfResource {
}

export default function PaintActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaintActionClass extends CreateActionMixin(Resource) implements PaintAction {
  }
  return PaintActionClass
}

class PaintActionImpl extends PaintActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PaintAction>) {
    super(arg)
    this.types.add(schema.PaintAction)
    initializeProperties<PaintAction>(this, init)
  }
}
PaintActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PaintAction)
PaintActionMixin.Class = PaintActionImpl
