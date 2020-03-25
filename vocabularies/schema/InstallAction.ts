import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface InstallAction extends Schema.ConsumeAction, RdfResource {
}

export default function InstallActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InstallActionClass extends ConsumeActionMixin(Resource) implements InstallAction {
  }
  return InstallActionClass
}

class InstallActionImpl extends InstallActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<InstallAction>) {
    super(arg)
    this.types.add(schema.InstallAction)
    initializeProperties<InstallAction>(this, init)
  }
}
InstallActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InstallAction)
InstallActionMixin.Class = InstallActionImpl
