import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rdfs } from '@tpluscode/rdf-ns-builders';
import { owl } from '../../lib/namespace';
import type * as Owl from '../..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List';

interface ClassEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  equivalentClass: Array<Rdfs.Class<D>>;
  intersectionOf: Array<Rdf.List<D>>;
  oneOf: Array<Rdf.List<D>>;
  unionOf: Array<Rdf.List<D>>;
}

declare module '@rdfine/rdfs/lib/Class' {
  interface Class<D extends RDF.DatasetCore> extends ClassEx<D> {
  }
}

export function ClassMixinEx<Base extends ExtendingConstructor<Rdfs.Class, ClassEx>>(Resource: Base): Constructor<ClassEx & RdfResourceCore> & Base {
  @namespace(owl)
  class Impl extends Resource implements ClassEx {
    @property.resource({ values: 'array', as: [RdfsClassMixin] })
    equivalentClass!: Array<Rdfs.Class>;
    @property.resource({ values: 'array', as: [RdfListMixin] })
    intersectionOf!: Array<Rdf.List>;
    @property.resource({ values: 'array', as: [RdfListMixin] })
    oneOf!: Array<Rdf.List>;
    @property.resource({ values: 'array', as: [RdfListMixin] })
    unionOf!: Array<Rdf.List>;
  }
  return Impl
}
ClassMixinEx.appliesTo = rdfs.Class
