import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.VoteAction)
  }
}
VoteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VoteAction)
VoteActionMixin.Class = VoteActionImpl