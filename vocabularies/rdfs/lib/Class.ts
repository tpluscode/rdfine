import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '..';
import { ResourceMixin } from './Resource';

export interface Class<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  subClassOf: Array<Rdfs.Class<D>>;
}

export function ClassMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Class> & RdfResourceCore> & Base {
  @namespace(rdfs)
  class ClassClass extends ResourceMixin(Resource) implements Partial<Class> {
    @property.resource({ values: 'array', as: [ClassMixin] })
    subClassOf!: Array<Rdfs.Class>;
  }
  return ClassClass
}

class ClassImpl extends ClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Class>) {
    super(arg, init)
    this.types.add(rdfs.Class)
  }

  static readonly __mixins: Mixin[] = [ClassMixin, ResourceMixin];
}
ClassMixin.appliesTo = rdfs.Class
ClassMixin.Class = ClassImpl

export const fromPointer = createFactory<Class>([ResourceMixin, ClassMixin], { types: [rdfs.Class] });
