import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Property<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  domainIncludes: RDF.Term | undefined;
  inverseOf: Schema.Property<D> | undefined;
  rangeIncludes: RDF.Term | undefined;
  supersededBy: Schema.Property<D> | undefined;
}

export function PropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Property> & RdfResourceCore> & Base {
  @namespace(schema)
  class PropertyClass extends IntangibleMixin(Resource) implements Partial<Property> {
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

export const fromPointer = createFactory<Property>([IntangibleMixin, PropertyMixin], { types: [schema.Property] });
