import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface GiveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function GiveActionMixin<Base extends Constructor>(Resource: Base): Constructor<GiveAction> & Base {
  @namespace(schema)
  class GiveActionClass extends TransferActionMixin(Resource) implements Partial<GiveAction> {
    @property.resource()
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
