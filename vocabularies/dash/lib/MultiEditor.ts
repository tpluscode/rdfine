import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { EditorMixin } from './Editor.js';

export interface MultiEditor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Editor<D>, RdfResource<D> {
}

export function MultiEditorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MultiEditor> & RdfResourceCore> & Base {
  @namespace(dash)
  class MultiEditorClass extends EditorMixin(Resource) implements Partial<MultiEditor> {
  }
  return MultiEditorClass
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
