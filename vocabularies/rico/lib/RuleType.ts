import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { TypeMixin } from './Type';

export interface RuleType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isOrWasRuleTypeOf: Rico.Rule<D> | undefined;
}

export function RuleTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RuleType> & RdfResourceCore> & Base {
  @namespace(rico)
  class RuleTypeClass extends TypeMixin(Resource) implements Partial<RuleType> {
    @property.resource({ implicitTypes: [rico.Rule] })
    isOrWasRuleTypeOf: Rico.Rule | undefined;
  }
  return RuleTypeClass
}

class RuleTypeImpl extends RuleTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RuleType>) {
    super(arg, init)
    this.types.add(rico.RuleType)
  }

  static readonly __mixins: Mixin[] = [RuleTypeMixin, TypeMixin];
}
RuleTypeMixin.appliesTo = rico.RuleType
RuleTypeMixin.Class = RuleTypeImpl

export const fromPointer = createFactory<RuleType>([TypeMixin, RuleTypeMixin], { types: [rico.RuleType] });
