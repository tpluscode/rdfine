import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ConsumeActionMixin } from './ConsumeAction';

export interface UseAction extends Schema.ConsumeAction, RdfResource {
}

export function UseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UseActionClass extends ConsumeActionMixin(Resource) implements UseAction {
  }
  return UseActionClass
}

class UseActionImpl extends UseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UseAction>) {
    super(arg, init)
    this.types.add(schema.UseAction)
  }
}
UseActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UseAction)
UseActionMixin.Class = UseActionImpl
