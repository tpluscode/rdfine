import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TransferActionMixin } from './TransferAction';

export interface ReturnAction extends Schema.TransferAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export function ReturnActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReturnActionClass extends TransferActionMixin(Resource) implements ReturnAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return ReturnActionClass
}

class ReturnActionImpl extends ReturnActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReturnAction>) {
    super(arg, init)
    this.types.add(schema.ReturnAction)
  }

  static readonly __mixins: Mixin[] = [ReturnActionMixin, TransferActionMixin];
}
ReturnActionMixin.appliesTo = schema.ReturnAction
ReturnActionMixin.Class = ReturnActionImpl
