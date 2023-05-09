import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TransferActionMixin } from './TransferAction.js';

export interface GiveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, rdfine.RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function GiveActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<GiveAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GiveActionClass extends TransferActionMixin(Resource) implements Partial<GiveAction> {
    @rdfine.property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return GiveActionClass
}

class GiveActionImpl extends GiveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GiveAction>) {
    super(arg, init)
    this.types.add(schema.GiveAction)
  }

  static readonly __mixins: Mixin[] = [GiveActionMixin, TransferActionMixin];
}
GiveActionMixin.appliesTo = schema.GiveAction
GiveActionMixin.Class = GiveActionImpl

export const fromPointer = createFactory<GiveAction>([TransferActionMixin, GiveActionMixin], { types: [schema.GiveAction] });
