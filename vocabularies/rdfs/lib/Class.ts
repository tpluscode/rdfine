import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '..';
import { ResourceMixin } from './Resource';

export interface Class<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
  subClassOf: Array<Rdfs.Class<SiblingNode<ID>>>;
}

export function ClassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class ClassClass extends ResourceMixin(Resource) implements Class {
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
