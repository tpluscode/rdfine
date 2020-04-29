import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/Class';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/List';

export interface Class extends Rdfs.Class, RdfResource {
  complementOf: Owl.Class;
  disjointUnionOf: Rdf.List;
  disjointWith: Owl.Class;
  hasKey: Rdf.List;
}

export function ClassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class ClassClass extends RdfsClassMixin(Resource) implements Class {
    @property.resource({ as: [ClassMixin] })
    complementOf!: Owl.Class;
    @property.resource({ as: [RdfListMixin] })
    disjointUnionOf!: Rdf.List;
    @property.resource({ as: [ClassMixin] })
    disjointWith!: Owl.Class;
    @property.resource({ as: [RdfListMixin] })
    hasKey!: Rdf.List;
  }
  return ClassClass
}

class ClassImpl extends ClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Class>) {
    super(arg, init)
    this.types.add(owl.Class)
  }
}
ClassMixin.shouldApply = (r: RdfResource) => r.types.has(owl.Class)
ClassMixin.Class = ClassImpl
