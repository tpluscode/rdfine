import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Shacl from '@rdfine/shacl';

interface ValidationResultEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  fixed: boolean | undefined;
}

declare module '@rdfine/shacl/lib/ValidationResult' {
  interface ValidationResult<D extends RDF.DatasetCore> extends ValidationResultEx<D> {
  }
}

export function ShaclValidationResultMixinEx<Base extends ExtendingConstructor<Shacl.ValidationResult, ValidationResultEx>>(Resource: Base): Constructor<ValidationResultEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements ValidationResultEx {
    @property.literal({ type: Boolean })
    fixed: boolean | undefined;
  }
  return Impl
}
ShaclValidationResultMixinEx.appliesTo = sh.ValidationResult
