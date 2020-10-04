import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';
import * as Rdf from '@rdfine/rdf';

export interface Class<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, RdfResource<D> {
  complementOf: Owl.Class<D> | undefined;
  disjointUnionOf: Rdf.List<D> | undefined;
  disjointWith: Owl.Class<D> | undefined;
  hasKey: Rdf.List<D> | undefined;
}

export function ClassMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class ClassClass extends Rdfs.ClassMixin(Resource) implements Class {
    @property.resource({ as: [ClassMixin] })
    complementOf: Owl.Class | undefined;
    @property.resource({ as: [Rdf.ListMixin] })
    disjointUnionOf: Rdf.List | undefined;
    @property.resource({ as: [ClassMixin] })
    disjointWith: Owl.Class | undefined;
    @property.resource({ as: [Rdf.ListMixin] })
    hasKey: Rdf.List | undefined;
  }
  return ClassClass
}

class ClassImpl extends ClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Class>) {
    super(arg, init)
    this.types.add(owl.Class)
  }

  static readonly __mixins: Mixin[] = [ClassMixin, Rdfs.ClassMixin];
}
ClassMixin.appliesTo = owl.Class
ClassMixin.Class = ClassImpl
