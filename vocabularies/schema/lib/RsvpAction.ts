import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InformActionMixin } from './InformAction.js';

export interface RsvpAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InformAction<D>, rdfine.RdfResource<D> {
  additionalNumberOfGuests: number | undefined;
  comment: Schema.Comment<D> | undefined;
  rsvpResponse: Schema.RsvpResponseType | undefined;
}

export function RsvpActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RsvpAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RsvpActionClass extends InformActionMixin(Resource) {
    @rdfine.property.literal({ type: Number })
    additionalNumberOfGuests: number | undefined;
    @rdfine.property.resource()
    comment: Schema.Comment | undefined;
    @rdfine.property()
    rsvpResponse: Schema.RsvpResponseType | undefined;
  }
  return RsvpActionClass as any
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

export const fromPointer = createFactory<RsvpAction>([InformActionMixin, RsvpActionMixin], { types: [schema.RsvpAction] });
