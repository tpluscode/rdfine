import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ControlActionMixin } from './ControlAction';

export interface ResumeAction extends Schema.ControlAction, RdfResource {
}

export function ResumeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResumeActionClass extends ControlActionMixin(Resource) implements ResumeAction {
  }
  return ResumeActionClass
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
