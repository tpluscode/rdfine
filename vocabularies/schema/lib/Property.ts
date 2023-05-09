import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Property<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  domainIncludes: RDF.Term | undefined;
  inverseOf: Schema.Property<D> | undefined;
  rangeIncludes: RDF.Term | undefined;
  supersededBy: Schema.Property<D> | undefined;
}

export function PropertyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Property> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PropertyClass extends IntangibleMixin(Resource) implements Partial<Property> {
    @rdfine.property()
    domainIncludes: RDF.Term | undefined;
    @rdfine.property.resource()
    inverseOf: Schema.Property | undefined;
    @rdfine.property()
    rangeIncludes: RDF.Term | undefined;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<Property>([IntangibleMixin, PropertyMixin], { types: [schema.Property] });
