import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.InstallAction)
  }
}
InstallActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InstallAction)
InstallActionMixin.Class = InstallActionImpl
