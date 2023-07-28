import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AppellationMixin } from './Appellation.js';

export interface Name<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Appellation<D>, rdfine.RdfResource<D> {
  isOrWasNameOf: Rico.Thing<D> | undefined;
}

export function NameMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Name & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class NameClass extends AppellationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isOrWasNameOf: Rico.Thing | undefined;
  }
  return NameClass as any
}

class NameImpl extends NameMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Name>) {
    super(arg, init)
    this.types.add(rico.Name)
  }

  static readonly __mixins: Mixin[] = [NameMixin, AppellationMixin];
}
NameMixin.appliesTo = rico.Name
NameMixin.Class = NameImpl

export const fromPointer = createFactory<Name>([AppellationMixin, NameMixin], { types: [rico.Name] });
