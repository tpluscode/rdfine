import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Shacl from '@rdfine/shacl';

interface FunctionEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  cachable: boolean | undefined;
}

declare module '@rdfine/shacl/lib/Function' {
  interface Function<D extends RDF.DatasetCore> extends FunctionEx<D> {
  }
}

export function FunctionMixinEx<Base extends ExtendingConstructor<Shacl.Function, FunctionEx>>(Resource: Base): Constructor<FunctionEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements FunctionEx {
    @property.literal({ type: Boolean })
    cachable: boolean | undefined;
  }
  return Impl
}
FunctionMixinEx.appliesTo = sh.Function
