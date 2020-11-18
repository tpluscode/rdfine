import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GrantMixin } from './Grant';

export interface MonetaryGrant<ID extends ResourceNode = ResourceNode> extends Schema.Grant<ID>, RdfResource<ID> {
  amount: Schema.MonetaryAmount<SiblingNode<ID>> | undefined;
  amountLiteral: number | undefined;
  funder: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function MonetaryGrantMixin<Base extends Constructor>(Resource: Base) {
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
