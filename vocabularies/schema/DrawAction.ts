import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreateActionMixin } from './CreateAction';

export interface DrawAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, RdfResource<D> {
}

export function DrawActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DrawActionClass extends CreateActionMixin(Resource) implements DrawAction {
  }
  return DrawActionClass
}

class DrawActionImpl extends DrawActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DrawAction>) {
    super(arg, init)
    this.types.add(schema.DrawAction)
  }

  static readonly __mixins: Mixin[] = [DrawActionMixin, CreateActionMixin];
}
DrawActionMixin.appliesTo = schema.DrawAction
DrawActionMixin.Class = DrawActionImpl
