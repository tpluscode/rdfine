import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<DrawAction>) {
    super(arg, init)
    this.types.add(schema.DrawAction)
  }
}
DrawActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DrawAction)
DrawActionMixin.Class = DrawActionImpl
