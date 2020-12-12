import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdfs } from '@tpluscode/rdf-ns-builders';
import { owl } from '../../lib/namespace';
import type * as Owl from '../..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { DatatypeMixin as RdfsDatatypeMixin } from '@rdfine/rdfs/lib/Datatype';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List';

interface DatatypeEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  datatypeComplementOf: Rdfs.Datatype<D> | undefined;
  onDatatype: Rdfs.Datatype<D> | undefined;
  withRestrictions: Rdf.List<D> | undefined;
}

declare module '@rdfine/rdfs/lib/Datatype' {
  interface Datatype<D extends RDF.DatasetCore> extends DatatypeEx<D> {
  }
}

export function DatatypeMixinEx<Base extends ExtendingConstructor<Rdfs.Datatype, DatatypeEx>>(Resource: Base): Constructor<DatatypeEx & RdfResourceCore> & Base {
  @namespace(owl)
  class Impl extends Resource implements DatatypeEx {
    @property.resource({ as: [RdfsDatatypeMixin] })
    datatypeComplementOf: Rdfs.Datatype | undefined;
    @property.resource({ as: [RdfsDatatypeMixin] })
    onDatatype: Rdfs.Datatype | undefined;
    @property.resource({ as: [RdfListMixin] })
    withRestrictions: Rdf.List | undefined;
  }
  return Impl
}
DatatypeMixinEx.appliesTo = rdfs.Datatype
