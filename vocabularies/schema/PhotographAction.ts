import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreateActionMixin from './CreateAction';

export interface PhotographAction extends Schema.CreateAction, RdfResource {
}

export default function PhotographActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhotographActionClass extends CreateActionMixin(Resource) implements PhotographAction {
  }
  return PhotographActionClass
}

class PhotographActionImpl extends PhotographActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PhotographAction>) {
    super(arg)
    this.types.add(schema.PhotographAction)
    initializeProperties(this, init)
  }
}
PhotographActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PhotographAction)
PhotographActionMixin.Class = PhotographActionImpl
