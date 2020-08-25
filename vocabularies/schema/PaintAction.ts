import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreateActionMixin } from './CreateAction';

export interface PaintAction extends Schema.CreateAction, RdfResource {
}

export function PaintActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PaintActionClass extends CreateActionMixin(Resource) implements PaintAction {
  }
  return PaintActionClass
}

class PaintActionImpl extends PaintActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PaintAction>) {
    super(arg, init)
    this.types.add(schema.PaintAction)
  }

  static readonly __mixins: Mixin[] = [PaintActionMixin, CreateActionMixin];
}
PaintActionMixin.appliesTo = schema.PaintAction
PaintActionMixin.Class = PaintActionImpl
