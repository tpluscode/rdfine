import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ChooseActionMixin from './ChooseAction';

export interface VoteAction extends Schema.ChooseAction, RdfResource {
  candidate: Schema.Person;
}

export default function VoteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VoteActionClass extends ChooseActionMixin(Resource) implements VoteAction {
    @property.resource()
    candidate!: Schema.Person;
  }
  return VoteActionClass
}

class VoteActionImpl extends VoteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<VoteAction>) {
    super(arg)
    this.types.add(schema.VoteAction)
    initializeProperties<VoteAction>(this, init)
  }
}
VoteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VoteAction)
VoteActionMixin.Class = VoteActionImpl
