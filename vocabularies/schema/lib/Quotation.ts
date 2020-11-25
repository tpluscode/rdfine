import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Quotation<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  spokenByCharacter: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function QuotationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuotationClass extends CreativeWorkMixin(Resource) implements Quotation {
    @property.resource()
    spokenByCharacter: Schema.Organization | Schema.Person | undefined;
  }
  return QuotationClass
}

class QuotationImpl extends QuotationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Quotation>) {
    super(arg, init)
    this.types.add(schema.Quotation)
  }

  static readonly __mixins: Mixin[] = [QuotationMixin, CreativeWorkMixin];
}
QuotationMixin.appliesTo = schema.Quotation
QuotationMixin.Class = QuotationImpl
