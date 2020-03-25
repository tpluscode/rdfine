import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface ReadAction extends Schema.ConsumeAction, RdfResource {
}

export default function ReadActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReadActionClass extends ConsumeActionMixin(Resource) implements ReadAction {
  }
  return ReadActionClass
}

class ReadActionImpl extends ReadActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReadAction>) {
    super(arg, init)
    this.types.add(schema.ReadAction)
  }
}
ReadActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReadAction)
ReadActionMixin.Class = ReadActionImpl
