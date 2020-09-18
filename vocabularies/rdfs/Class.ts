import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdfs from '.';
import { ResourceMixin } from './Resource';

export interface Class extends Rdfs.Resource, RdfResource {
  subClassOf: Rdfs.Class | undefined;
}

export function ClassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdfs)
  class ClassClass extends ResourceMixin(Resource) implements Class {
    @property.resource({ as: [ClassMixin] })
    subClassOf: Rdfs.Class | undefined;
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
