import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ScriptMixin } from './Script';
import { SuggestionGeneratorMixin } from './SuggestionGenerator';

export interface ScriptSuggestionGenerator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, Dash.SuggestionGenerator<D>, RdfResource<D> {
}

export function ScriptSuggestionGeneratorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ScriptSuggestionGenerator> & RdfResourceCore> & Base {
  @namespace(dash)
  class ScriptSuggestionGeneratorClass extends SuggestionGeneratorMixin(ScriptMixin(Resource)) implements Partial<ScriptSuggestionGenerator> {
  }
  return ScriptSuggestionGeneratorClass
}

class ScriptSuggestionGeneratorImpl extends ScriptSuggestionGeneratorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScriptSuggestionGenerator>) {
    super(arg, init)
    this.types.add(dash.ScriptSuggestionGenerator)
  }

  static readonly __mixins: Mixin[] = [ScriptSuggestionGeneratorMixin, ScriptMixin, SuggestionGeneratorMixin];
}
ScriptSuggestionGeneratorMixin.appliesTo = dash.ScriptSuggestionGenerator
ScriptSuggestionGeneratorMixin.Class = ScriptSuggestionGeneratorImpl

export const fromPointer = createFactory<ScriptSuggestionGenerator>([SuggestionGeneratorMixin, ScriptMixin, ScriptSuggestionGeneratorMixin], { types: [dash.ScriptSuggestionGenerator] });
