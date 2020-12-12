import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from '@tpluscode/rdf-ns-builders';
import { dash } from '../../lib/namespace';
import type * as Dash from '../..';
import type * as Shacl from '@rdfine/shacl';

interface ConstraintComponentEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  localConstraint: boolean | undefined;
  propertySuggestionGenerator: Dash.SuggestionGenerator<D> | undefined;
  staticConstraint: boolean | undefined;
}

declare module '@rdfine/shacl/lib/ConstraintComponent' {
  interface ConstraintComponent<D extends RDF.DatasetCore> extends ConstraintComponentEx<D> {
  }
}

export function ShaclConstraintComponentMixinEx<Base extends ExtendingConstructor<Shacl.ConstraintComponent, ConstraintComponentEx>>(Resource: Base): Constructor<ConstraintComponentEx & RdfResourceCore> & Base {
  @namespace(dash)
  class Impl extends Resource implements ConstraintComponentEx {
    @property.literal({ type: Boolean })
    localConstraint: boolean | undefined;
    @property.resource({ implicitTypes: [dash.SuggestionGenerator] })
    propertySuggestionGenerator: Dash.SuggestionGenerator | undefined;
    @property.literal({ type: Boolean })
    staticConstraint: boolean | undefined;
  }
  return Impl
}
ShaclConstraintComponentMixinEx.appliesTo = sh.ConstraintComponent
