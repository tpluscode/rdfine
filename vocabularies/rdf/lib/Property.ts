import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface Property<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function PropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Property> & RdfResourceCore> & Base {
  @namespace(rdf)
  class PropertyClass extends Resource implements Partial<Property> {
  }
  return PropertyClass
}

class PropertyImpl extends PropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Property>) {
    super(arg, init)
    this.types.add(rdf.Property)
  }

  static readonly __mixins: Mixin[] = [PropertyMixin];
}
PropertyMixin.appliesTo = rdf.Property
PropertyMixin.Class = PropertyImpl

export const fromPointer = createFactory<Property>([PropertyMixin], { types: [rdf.Property] });
