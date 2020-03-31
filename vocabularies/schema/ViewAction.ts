import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface ViewAction extends Schema.ConsumeAction, RdfResource {
}

export default function ViewActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ViewActionClass extends ConsumeActionMixin(Resource) implements ViewAction {
  }
  return ViewActionClass
}

class ViewActionImpl extends ViewActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ViewAction>) {
    super(arg, init)
    this.types.add(schema.ViewAction)
  }
}
ViewActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ViewAction)
ViewActionMixin.Class = ViewActionImpl
