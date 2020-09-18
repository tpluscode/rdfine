import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { InformActionMixin } from './InformAction';

export interface RsvpAction extends Schema.InformAction, RdfResource {
  additionalNumberOfGuests: number | undefined;
  comment: Schema.Comment | undefined;
  rsvpResponse: Schema.RsvpResponseType | undefined;
}

export function RsvpActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RsvpActionClass extends InformActionMixin(Resource) implements RsvpAction {
    @property.literal({ type: Number })
    additionalNumberOfGuests: number | undefined;
    @property.resource()
    comment: Schema.Comment | undefined;
    @property()
    rsvpResponse: Schema.RsvpResponseType | undefined;
  }
  return RsvpActionClass
}

class RsvpActionImpl extends RsvpActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RsvpAction>) {
    super(arg, init)
    this.types.add(schema.RsvpAction)
  }

  static readonly __mixins: Mixin[] = [RsvpActionMixin, InformActionMixin];
}
RsvpActionMixin.appliesTo = schema.RsvpAction
RsvpActionMixin.Class = RsvpActionImpl
