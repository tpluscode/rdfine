import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface LendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, RdfResource<D> {
  borrower: Schema.Person<D> | undefined;
}

export function LendActionMixin<Base extends Constructor>(Resource: Base): Constructor<LendAction> & Base {
  @namespace(schema)
  class LendActionClass extends TransferActionMixin(Resource) implements Partial<LendAction> {
    @property.resource()
    borrower: Schema.Person | undefined;
  }
  return LendActionClass
}

class LendActionImpl extends LendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LendAction>) {
    super(arg, init)
    this.types.add(schema.LendAction)
  }

  static readonly __mixins: Mixin[] = [LendActionMixin, TransferActionMixin];
}
LendActionMixin.appliesTo = schema.LendAction
LendActionMixin.Class = LendActionImpl
