import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { WidgetMixin } from './Widget.js';

export interface Editor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Widget<D>, rdfine.RdfResource<D> {
}

export function EditorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Editor> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class EditorClass extends WidgetMixin(Resource) implements Partial<Editor> {
  }
  return EditorClass
}

class EditorImpl extends EditorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Editor>) {
    super(arg, init)
    this.types.add(dash.Editor)
  }

  static readonly __mixins: Mixin[] = [EditorMixin, WidgetMixin];
}
EditorMixin.appliesTo = dash.Editor
EditorMixin.Class = EditorImpl

export const fromPointer = createFactory<Editor>([WidgetMixin, EditorMixin], { types: [dash.Editor] });
