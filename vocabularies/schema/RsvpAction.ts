import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InformActionMixin from './InformAction';

export interface RsvpAction extends Schema.InformAction, RdfResource {
  additionalNumberOfGuests: number;
  comment: Schema.Comment;
  rsvpResponse: Schema.RsvpResponseType;
}

export default function RsvpActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RsvpActionClass extends InformActionMixin(Resource) implements RsvpAction {
    @property.literal({ type: Number })
    additionalNumberOfGuests!: number;
    @property.resource()
    comment!: Schema.Comment;
    @property()
    rsvpResponse!: Schema.RsvpResponseType;
  }
  return RsvpActionClass
}

class RsvpActionImpl extends RsvpActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RsvpAction>) {
    super(arg)
    this.types.add(schema.RsvpAction)
    initializeProperties(this, init)
  }
}
RsvpActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RsvpAction)
RsvpActionMixin.Class = RsvpActionImpl
