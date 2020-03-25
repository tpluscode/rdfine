import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreateActionMixin from './CreateAction';

export interface DrawAction extends Schema.CreateAction, RdfResource {
}

export default function DrawActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DrawActionClass extends CreateActionMixin(Resource) implements DrawAction {
  }
  return DrawActionClass
}

class DrawActionImpl extends DrawActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DrawAction>) {
    super(arg)
    this.types.add(schema.DrawAction)
    initializeProperties<DrawAction>(this, init)
  }
}
DrawActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DrawAction)
DrawActionMixin.Class = DrawActionImpl
