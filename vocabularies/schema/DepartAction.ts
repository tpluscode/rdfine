import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import MoveActionMixin from './MoveAction';

export interface DepartAction extends Schema.MoveAction, RdfResource {
}

export default function DepartActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DepartActionClass extends MoveActionMixin(Resource) implements DepartAction {
  }
  return DepartActionClass
}

class DepartActionImpl extends DepartActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DepartAction)
  }
}
DepartActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DepartAction)
DepartActionMixin.Class = DepartActionImpl
