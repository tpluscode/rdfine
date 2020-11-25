import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Grant<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  fundedItem: Schema.Thing<SiblingNode<ID>> | undefined;
  sponsor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function GrantMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GrantClass extends IntangibleMixin(Resource) implements Grant {
    @property.resource()
    fundedItem: Schema.Thing | undefined;
    @property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
  }
  return GrantClass
}

class GrantImpl extends GrantMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Grant>) {
    super(arg, init)
    this.types.add(schema.Grant)
  }

  static readonly __mixins: Mixin[] = [GrantMixin, IntangibleMixin];
}
GrantMixin.appliesTo = schema.Grant
GrantMixin.Class = GrantImpl
