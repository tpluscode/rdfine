import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Shacl from '@rdfine/shacl';

interface SPARQLExecutableEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  requiredExecutionPlatform: Dash.ExecutionPlatform<D> | undefined;
}

declare module '@rdfine/shacl/lib/SPARQLExecutable' {
  interface SPARQLExecutable<D extends RDF.DatasetCore> extends SPARQLExecutableEx<D> {
  }
}

export function SPARQLExecutableMixinEx<Base extends ExtendingConstructor<Shacl.SPARQLExecutable, SPARQLExecutableEx>>(Resource: Base): Constructor<SPARQLExecutableEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements SPARQLExecutableEx {
    @property.resource({ implicitTypes: [dash.ExecutionPlatform] })
    requiredExecutionPlatform: Dash.ExecutionPlatform | undefined;
  }
  return Impl
}
SPARQLExecutableMixinEx.appliesTo = sh.SPARQLExecutable
