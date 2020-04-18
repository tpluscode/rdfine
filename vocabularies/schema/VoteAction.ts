import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<VoteAction>) {
    super(arg, init)
    this.types.add(schema.VoteAction)
  }
}
VoteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VoteAction)
VoteActionMixin.Class = VoteActionImpl
