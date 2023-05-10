import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { GrantMixin } from './Grant.js';

export interface MonetaryGrant<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Grant<D>, rdfine.RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
  funder: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function MonetaryGrantMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MonetaryGrant> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MonetaryGrantClass extends GrantMixin(Resource) implements Partial<MonetaryGrant> {
    @rdfine.property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @rdfine.property.resource()
    funder: Schema.Organization | Schema.Person | undefined;
  }
  return MonetaryGrantClass
}

class MonetaryGrantImpl extends MonetaryGrantMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MonetaryGrant>) {
    super(arg, init)
    this.types.add(schema.MonetaryGrant)
  }

  static readonly __mixins: Mixin[] = [MonetaryGrantMixin, GrantMixin];
}
MonetaryGrantMixin.appliesTo = schema.MonetaryGrant
MonetaryGrantMixin.Class = MonetaryGrantImpl

export const fromPointer = createFactory<MonetaryGrant>([GrantMixin, MonetaryGrantMixin], { types: [schema.MonetaryGrant] });
