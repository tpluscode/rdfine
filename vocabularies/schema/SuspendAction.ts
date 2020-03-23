import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ControlActionMixin from './ControlAction';

export interface SuspendAction extends Schema.ControlAction, RdfResource {
}

export default function SuspendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SuspendActionClass extends ControlActionMixin(Resource) implements SuspendAction {
  }
  return SuspendActionClass
}

class SuspendActionImpl extends SuspendActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SuspendAction)
  }
}
SuspendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SuspendAction)
SuspendActionMixin.Class = SuspendActionImpl
