import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { EditorMixin } from './Editor.js';

export interface MultiEditor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Editor<D>, rdfine.RdfResource<D> {
}

export function MultiEditorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MultiEditor & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class MultiEditorClass extends EditorMixin(Resource) {
  }
  return MultiEditorClass as any
}

class MultiEditorImpl extends MultiEditorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MultiEditor>) {
    super(arg, init)
    this.types.add(dash.MultiEditor)
  }

  static readonly __mixins: Mixin[] = [MultiEditorMixin, EditorMixin];
}
MultiEditorMixin.appliesTo = dash.MultiEditor
MultiEditorMixin.Class = MultiEditorImpl

export const fromPointer = createFactory<MultiEditor>([EditorMixin, MultiEditorMixin], { types: [dash.MultiEditor] });
