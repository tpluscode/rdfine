import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { GroupMixin } from './Group.js';

export interface Family<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Group<D>, RdfResource<D> {
  hasFamilyType: Rico.FamilyType<D> | undefined;
}

export function FamilyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Family> & RdfResourceCore> & Base {
  @namespace(rico)
  class FamilyClass extends GroupMixin(Resource) implements Partial<Family> {
    @property.resource({ implicitTypes: [rico.FamilyType] })
    hasFamilyType: Rico.FamilyType | undefined;
  }
  return FamilyClass
}

class FamilyImpl extends FamilyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Family>) {
    super(arg, init)
    this.types.add(rico.Family)
  }

  static readonly __mixins: Mixin[] = [FamilyMixin, GroupMixin];
}
FamilyMixin.appliesTo = rico.Family
FamilyMixin.Class = FamilyImpl

export const fromPointer = createFactory<Family>([GroupMixin, FamilyMixin], { types: [rico.Family] });
