import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { EditorMixin } from './Editor.js';

export interface SingleEditor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Editor<D>, rdfine.RdfResource<D> {
}

export function SingleEditorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SingleEditor & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class SingleEditorClass extends EditorMixin(Resource) {
  }
  return SingleEditorClass as any
}

class SingleEditorImpl extends SingleEditorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SingleEditor>) {
    super(arg, init)
    this.types.add(dash.SingleEditor)
  }

  static readonly __mixins: Mixin[] = [SingleEditorMixin, EditorMixin];
}
SingleEditorMixin.appliesTo = dash.SingleEditor
SingleEditorMixin.Class = SingleEditorImpl

export const fromPointer = createFactory<SingleEditor>([EditorMixin, SingleEditorMixin], { types: [dash.SingleEditor] });
