import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AppellationMixin } from './Appellation.js';

export interface Identifier<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Appellation<D>, RdfResource<D> {
  hasIdentifierType: Rico.IdentifierType<D> | undefined;
  isOrWasIdentifierOf: Rico.Thing<D> | undefined;
}

export function IdentifierMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Identifier> & RdfResourceCore> & Base {
  @namespace(rico)
  class IdentifierClass extends AppellationMixin(Resource) implements Partial<Identifier> {
    @property.resource({ implicitTypes: [rico.IdentifierType] })
    hasIdentifierType: Rico.IdentifierType | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isOrWasIdentifierOf: Rico.Thing | undefined;
  }
  return IdentifierClass
}

class IdentifierImpl extends IdentifierMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Identifier>) {
    super(arg, init)
    this.types.add(rico.Identifier)
  }

  static readonly __mixins: Mixin[] = [IdentifierMixin, AppellationMixin];
}
IdentifierMixin.appliesTo = rico.Identifier
IdentifierMixin.Class = IdentifierImpl

export const fromPointer = createFactory<Identifier>([AppellationMixin, IdentifierMixin], { types: [rico.Identifier] });
