import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdfs } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '../index.js';
import { ResourceMixin } from './Resource.js';

export interface Class<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  subClassOf: Array<Rdfs.Class<D>>;
}

export function ClassMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Class & RdfResourceCore> & Base {
  @rdfine.namespace(rdfs)
  class ClassClass extends ResourceMixin(Resource) {
    @rdfine.property.resource({ values: 'array', as: [ClassMixin] })
    subClassOf!: Array<Rdfs.Class>;
  }
  return ClassClass as any
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
