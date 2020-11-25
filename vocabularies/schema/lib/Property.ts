import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Property<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  domainIncludes: RDF.Term | undefined;
  inverseOf: Schema.Property<SiblingNode<ID>> | undefined;
  rangeIncludes: RDF.Term | undefined;
  supersededBy: Schema.Property<SiblingNode<ID>> | undefined;
}

export function PropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PropertyClass extends IntangibleMixin(Resource) implements Property {
    @property()
    domainIncludes: RDF.Term | undefined;
    @property.resource()
    inverseOf: Schema.Property | undefined;
    @property()
    rangeIncludes: RDF.Term | undefined;
    @property.resource()
    supersededBy: Schema.Property | undefined;
  }
  return PropertyClass
}

class PropertyImpl extends PropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Property>) {
    super(arg, init)
    this.types.add(schema.Property)
  }

  static readonly __mixins: Mixin[] = [PropertyMixin, IntangibleMixin];
}
PropertyMixin.appliesTo = schema.Property
PropertyMixin.Class = PropertyImpl
