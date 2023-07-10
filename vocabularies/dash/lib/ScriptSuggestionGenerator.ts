import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ScriptMixin } from './Script.js';
import { SuggestionGeneratorMixin } from './SuggestionGenerator.js';

export interface ScriptSuggestionGenerator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Script<D>, Dash.SuggestionGenerator<D>, rdfine.RdfResource<D> {
}

export function ScriptSuggestionGeneratorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ScriptSuggestionGenerator & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ScriptSuggestionGeneratorClass extends SuggestionGeneratorMixin(ScriptMixin(Resource)) {
  }
  return ScriptSuggestionGeneratorClass as any
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
