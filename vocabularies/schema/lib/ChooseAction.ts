import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AssessActionMixin } from './AssessAction.js';

export interface ChooseAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AssessAction<D>, rdfine.RdfResource<D> {
  actionOption: Schema.Thing<D> | undefined;
  actionOptionLiteral: string | undefined;
  option: Schema.Thing<D> | undefined;
  optionLiteral: string | undefined;
}

export function ChooseActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ChooseAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ChooseActionClass extends AssessActionMixin(Resource) {
    @rdfine.property.resource()
    actionOption: Schema.Thing | undefined;
    @rdfine.property.literal({ path: schema.actionOption })
    actionOptionLiteral: string | undefined;
    @rdfine.property.resource()
    option: Schema.Thing | undefined;
    @rdfine.property.literal({ path: schema.option })
    optionLiteral: string | undefined;
  }
  return ChooseActionClass as any
}

class ChooseActionImpl extends ChooseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChooseAction>) {
    super(arg, init)
    this.types.add(schema.ChooseAction)
  }

  static readonly __mixins: Mixin[] = [ChooseActionMixin, AssessActionMixin];
}
ChooseActionMixin.appliesTo = schema.ChooseAction
ChooseActionMixin.Class = ChooseActionImpl

export const fromPointer = createFactory<ChooseAction>([AssessActionMixin, ChooseActionMixin], { types: [schema.ChooseAction] });
