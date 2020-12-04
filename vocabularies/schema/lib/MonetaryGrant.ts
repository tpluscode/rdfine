import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GrantMixin } from './Grant';

export interface MonetaryGrant<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Grant<D>, RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
  funder: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function MonetaryGrantMixin<Base extends Constructor>(Resource: Base): Constructor<MonetaryGrant> & Base {
  @namespace(schema)
  class MonetaryGrantClass extends GrantMixin(Resource) implements MonetaryGrant {
    @property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @property.resource()
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
