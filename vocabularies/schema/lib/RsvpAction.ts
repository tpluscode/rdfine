import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { InformActionMixin } from './InformAction.js';

export interface RsvpAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InformAction<D>, RdfResource<D> {
  additionalNumberOfGuests: number | undefined;
  comment: Schema.Comment<D> | undefined;
  rsvpResponse: Schema.RsvpResponseType | undefined;
}

export function RsvpActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RsvpAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class RsvpActionClass extends InformActionMixin(Resource) implements Partial<RsvpAction> {
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

export const fromPointer = createFactory<RsvpAction>([InformActionMixin, RsvpActionMixin], { types: [schema.RsvpAction] });
