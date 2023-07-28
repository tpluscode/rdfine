import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ControlActionMixin } from './ControlAction.js';

export interface ResumeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ControlAction<D>, rdfine.RdfResource<D> {
}

export function ResumeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ResumeAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ResumeActionClass extends ControlActionMixin(Resource) {
  }
  return ResumeActionClass as any
}

class ResumeActionImpl extends ResumeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ResumeAction>) {
    super(arg, init)
    this.types.add(schema.ResumeAction)
  }

  static readonly __mixins: Mixin[] = [ResumeActionMixin, ControlActionMixin];
}
ResumeActionMixin.appliesTo = schema.ResumeAction
ResumeActionMixin.Class = ResumeActionImpl

export const fromPointer = createFactory<ResumeAction>([ControlActionMixin, ResumeActionMixin], { types: [schema.ResumeAction] });
