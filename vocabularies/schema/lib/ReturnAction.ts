import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TransferActionMixin } from './TransferAction.js';

export interface ReturnAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, rdfine.RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function ReturnActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ReturnAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReturnActionClass extends TransferActionMixin(Resource) implements Partial<ReturnAction> {
    @rdfine.property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
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

export const fromPointer = createFactory<ReturnAction>([TransferActionMixin, ReturnActionMixin], { types: [schema.ReturnAction] });
